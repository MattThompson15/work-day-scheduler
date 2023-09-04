//display time live with constant update IRT
$("#currentDay"). text(moment().format(" MMMM Do YYYY, h:mm:ss a"));

//this function displays the current date and time
setInterval(function () {
  $("currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
}, 1000)


//variables being declared to create a container , select all of the buttons, Arrat time and numbers, 
const createContainer = $(".container");
const saveButton = document.querySelectorAll("button");
const timeList = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
const timeId = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//a for loop to iterate through the timelist and timeId array and appends the data (cycles through and "pushes" appropriate content)
//creates rows and a section for each time slot.
for (let i = 0; i < timeList.length; i++) {
  let createRow = $("<div class='row time-block'>").attr("id", timeId[i]);
  let createTime = $("div class='hour col'>");
}

//Creates the text area to hold the content
let createTextarea = $("<textarea class='col-10'>");
createTextarea.attr("id", timeList[i]);
//Will create the button and save icon using "fa-save using a font icon");
let createButton = $("button type='button' class='saveBtn col-1 far fa-save'>");





// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
