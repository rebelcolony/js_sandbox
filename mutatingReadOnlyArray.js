const s = [1, 3, 5]

function editInPlace() {
  "use strict";

  s = [2, 4, 6]; // this wont work

  s[0] = 2; // using bracket notation will
  s[1] = 4;
  s[2] = 6;
}

editInPlace();