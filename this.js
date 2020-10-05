// function helloWorld() {
//   console.log("Hello world!");
//   console.log(this);
// }
// helloWorld();

// var Portland = {
//   bridges: 12,
//   airport: 1,
//   soccerTeams: 1,
//   logNumberOfBridges: function() {
//     console.log("There are " + this.bridges + " bridges in Portland!");
//   }
// }
//
// function logTeams() {
//   console.log(this.soccerTeams);
// }
//
// Portland.foo = logTeams;
//
// Portland.foo();
//
// logTeams();

var City = function(name, state) {
  this.name = name || 'Portland';
  this.state = state || 'Oregon';
  this.printMyCityAndState = function() {
    console.log("My city is " + this.name + ", and my state is " + this.state);
  }
};

portland = new City();
seattle = new City('Seattle', 'Washington');

// console.log(portland);
// console.log(seattle);

portland.printMyCityAndState();
seattle.printMyCityAndState();
