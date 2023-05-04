// Display today's day, date and time
let myVar = setInterval(myTimer, 1000);
function myTimer() {
  const todayDate = moment().format("dddd, MMMM Do YYYY, h:mm.ss");
  $("#currentDay").html(todayDate);
}

$(document).ready(function () {

  // saveBtn click listener 
  $(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var evtText = $(this).siblings(".event").val();
    var evtTime = $(this).parent().attr("id");
    // Save text in local storage
    localStorage.setItem(evtTime, evtText);
  })
  //DeleteBtn click listener
  $(".deleteBtn").click(function () {
    evtTime = $(this).siblings(".hour").text();
    evtText = $(this).siblings(".event").val("");
    localStorage.removeItem($(this).parent().attr("id"));
  });

  function timeTracker() {
    //get current number of hours.
    let timeNow = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);

      // To check the time and add the classes for background indicators
      if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }

// Get item from local storage if any
$("#hour8 .event").val(localStorage.getItem("hour8"));
$("#hour9 .event").val(localStorage.getItem("hour9"));
$("#hour10 .event").val(localStorage.getItem("hour10"));
$("#hour11 .event").val(localStorage.getItem("hour11"));
$("#hour12 .event").val(localStorage.getItem("hour12"));
$("#hour13 .event").val(localStorage.getItem("hour13"));
$("#hour14 .event").val(localStorage.getItem("hour14"));
$("#hour15 .event").val(localStorage.getItem("hour15"));
$("#hour16 .event").val(localStorage.getItem("hour16"));
$("#hour17 .event").val(localStorage.getItem("hour17"));
  
timeTracker();
});