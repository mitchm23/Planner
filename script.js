
// onstart

$(document).ready(function () {
  let timeArray = [
    "9:00AM",
    "10:00AM",
    "11:00AM",
    "12:00PM",
    "1:00PM",
    "2:00PM",
    "3:00PM",
    "4:00PM",
    "5:00PM",

    
  ];

 
//   get current time and date
  let now = new Date();
  let currentDate = moment().format("MMMM Do YYYY");
  let y = now.getFullYear();
  let m = now.getMonth() + 1;
  let d = now.getDate();

  let total = new Date(y, m, 0).getDate();

  let output =
    (m < 10 ? "0" : "") + m + "/" + (d < 10 ? "0" : "") + d + "/" + y;

  color();

  let container = $(".container");
  let time = $("#currentDay").text(currentDate);


  



  //populate time blocks
  for (i = 0; i < timeArray.length; i++) {
    let timeBlock = $("<div>").addClass("time-block");
    $(timeBlock).attr("data",i+9);
    let row = $("<div>").addClass("row");
    let hour = $("<div>").addClass("hour col-2");
    $(hour).text(timeArray[i]);
    let past = $("<input>").addClass("past col-8").attr("id", i+9)

    let saveBtn = $("<button>").addClass("saveBtn col-2");
    $(saveBtn).text("Save");
    $(row).append(hour);
    $(row).append(past);
    $(row).append(saveBtn);
    $(timeBlock).append(row);
    $(container).append(timeBlock);

    
    for (let i = 0; i < timeArray.length + 9; i++) {
      var local = localStorage.getItem($(past));

      if (local) {
        $(past).find("textarea").val(local);
      }
    }
// save the plans into local memory
    $(saveBtn).on("click", saveNotes);

    function saveNotes(event) {
      console.log("*****", event.target);
      var timeText = $(event.target).siblings("input").val();
      var id = $(event.target).closest(".time-block").attr("data");
      localStorage.setItem(id, timeText);
      
      console.log('hour')
    }

   
  }

function checkLocal(){
  
  $("#9.col-8").val(localStorage.getItem("9"))
  $("#10.col-8").val(localStorage.getItem("10"))
  $("#11.col-8").val(localStorage.getItem("11"))
  $("#12.col-8").val(localStorage.getItem("12"))
  $("#13.col-8").val(localStorage.getItem("13"))
  $("#14.col-8").val(localStorage.getItem("14"))
  $("#15.col-8").val(localStorage.getItem("15"))
  $("#16.col-8").val(localStorage.getItem("16"))
  $("#17.col-8").val(localStorage.getItem("17"))
  
}
checkLocal();
// change colors
function color() {
  let hour = new Date();
  h = hour.getHours();
  $(hour).each(function () {
    var thisHour = parseInt($(this).attr("id"));
  });
}
});
