// Used moment to format the current date to a variable
var date = moment().format("dddd, MMMM Do");
// Displayed date to the current day section of the html file
$("#currentDay").html(date);

// Created a time function
function time() {
    // Used moment to set the current hour to a variable
    var currentTime = moment().hours();
    // Created a function for each time-block class
    $(".time-block").each(function () {
        // Defined a variable that grabs the id attribute, which is an int, in the time block
        var setTime = parseInt($(this).attr("id"));
        // If the current time and the set time have the same number then it adds the class present and removes the past future classes making the description bar red
        if (currentTime === setTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
            // If the set time is less than the current time then it adds the past class and removes the future and present classes making the description bar grey
    } if (setTime < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
        // If the set time is greater than the current time it adds the future class and removes the present and future classes making the description bar green
    } if (setTime > currentTime) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("future");
    }
})
};

// Calls the time function
time();

// When clicking the save button
$(".saveBtn").on("click", function () {
    // Grabs the description value entered and the time its assigned to
    var myTime = $(this).parent().attr("id");
    var myValue = $(this).siblings(".description").val();
    // Sets the local storage item to the above defined variables
    localStorage.setItem(myTime, myValue);
    // Removes the hidden class from save in the html, displaying it
    $("#save").removeClass("hidden");
})

// Gets every saved item from the local storage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));