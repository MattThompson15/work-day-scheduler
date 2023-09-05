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

//Creates the text area to hold the content
let createTextarea = $("<textarea class='col-10'>");
createTextarea.attr("id", timeList[i]);
//Will create the button and save icon using "fa-save using a font icon");
let createButton = $("button type='button' class='saveBtn col-1 far fa-save'>");

//this attaches the created row to the container
createContainer.append(createRow);
//this creates the timelist and attaches 8 rows 9am-5pm
createTime.text(timeList[i]);
createRow.append(createTime);

//Attaches the previsously created "text area" so users can input content
createRow.append(createTextarea);

//creates buttons for each time slot (8am-5pm0
createButton.text();
createRow.append(createButton);
}

//calls the localStorage Function(will save all user input later in the JS)
localStorageFunctions(); {

  for(let index = 0; index < numbers.length; index++) {
    $("textarea")[index].value = localStorage.getItem("textarea" + String(index + 1));

  }
}

//this to save the stored data that has been entered into the textarea 
$("button").on("click", function (event) {
  event.preventDefault();

  for (let index = 0; index < numbers.length; index++) {
    localStorage.setItem('textarea' + String(index +1), $("textarea")[index].value)

  }
});

//Colors the appropriate row/timeblock based upon whether or not the current time of day is ewual to less than the timeblock youre in
//Grey= already past, Red = Current hour, Green= Coming up
function timeValid() {
  var currentHour =  moment().hours();
  $(".time-block").each(function () {
    var currentBlock = parseInt ($(this).attr("id").split(" ")[0]);

    if (currentBlock < currentHour) {
      $(this).addClass("past");
    } else if (currentBlock === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass ("future");

    }
  });
}


//Calls function to check whether time is still valid or not
timeValid()
    
    
  







