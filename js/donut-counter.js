//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.

var guests = prompt("How many guests do you have?"); 

var donuts = prompt("How many donuts do you have?"); 

guests = parseInt(guests, 10);
donuts = parseInt(donuts,10); 

if (guests > donuts) {
  alert('There are ${donuts} donuts and ${guests} guest, there is not enough donuts for the guests'); 
} else {
  alert('There are ${donuts} donuts and ${guests} guest, there is enough donuts for your guests';
}

