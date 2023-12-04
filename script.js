const localeSettings = {};
dayjs.locale(localeSettings);

$(function () {
    //current hour of day using dayjs library.
    const currentHour = dayjs().format('H');
// changes the color of each time block, based on past, present, and future(not working.)
function hourlyColor() {
    $('.time-block').each(function() {
        const blockHour = parseInt(this.id);
        $(this).toggleClass('past', blockHour < currentHour);
        $(this).toggleClass('present' , blockHour === currentHour);
        $(this).toggleClass('future' , blockHour > currentHour);
    });
}
//Function to save user input in textarea to local storage
function textEntry() {
    $('.saveBtn').on('click', function() {
        const key = $(this).parent().attr('id');
        const value = $(this).siblings('.description').val();
        localStorage.setItem(key, value);
    });
}
//This function refrehses the color of each time block based in whether it is in past, present or future(not working)
function refreshColor() {
    $('.time-block').each(function() {
        const blockHour = parseInt(this.id);
        if (blockHour == currentHour) {
            $(this).removeClass('past future').addClass('present');
          }  else if (blockHour < currentHour) {
            $(this).removeClass('future present').addClass('past');
          } else {
            $(this).removeClass('past present').addClass('future');
          }
        });
    }   
    