// Buisiness Logic
// Create a webpage where a user can select the name of a movie, the time of day that they would like to see the movie and their age. The webpage should let them know how much their movie ticket will cost, based on those three factors. Consider that non-"first-release" movies, matinee and senior tickets tend to be cheaper than the regular priced ticket.
//
// Your constructor and prototype could be called Ticket and you can come up with the formula for determining how the price is calculated depending on the input from the user.

function Ticket(name, age, time, movie) {
  this.name = name;
  this.age = age;
  this.time = time;
  this.movie = movie;
}

Ticket.prototype.ticketCost = function() {
  var price = 0;
  if (this.movie > 1) {
    price += 12;
  }else {
    price += 8;
  }
  if (this.time === 1) {
    price -= 2;
  }else if (this.time === 3) {
    price += 2;
  }
  if (this.age <= 5 || this.age >= 70) {
    price -= 2;
  }else {
  }
  return price;
}

Ticket.prototype.printTicket = function(ticketCost) {
  var movieString;
  var timeString;
  console.log("movie / time", this.movie, this.time);
  if (this.movie === 1)     { movieString = "Dark Knight"; }
  else if (this.movie === 2){ movieString = "Double Tap"; }
  else if (this.movie === 3){ movieString = "Gemini"; }
  else {console.log("Something went wrong with movie stringer")}

  if (this.time === 1)     { timeString = "12:00"; }
  else if (this.time === 2){ timeString = "5:00"; }
  else if (this.time === 3){ timeString = "7:00"; }
  else {console.log("Something went wrong with time stringer")}

  return "Hello " + this.name + ".\nHere is your ticket!\n" + movieString + " at: " + timeString + "\nCost: $" + ticketCost;
}








// User Interface
$(document).ready(function(){
  $(".userInput").submit(function(event){
    event.preventDefault();

    var name = $("input#nameInput").val();
    var age = $("input#ageInput").val();
    var movie = parseInt($("input:radio[name=movie]:checked").val());
    var time = parseInt($("input:radio[name=time]:checked").val());


    var newTicket = new Ticket(name, age, time, movie)
    var ticketCost = newTicket.ticketCost();
    $("#answer").text(newTicket.printTicket(ticketCost));

  });
});
