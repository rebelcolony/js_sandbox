// The search() method executes a search for a match between a regular expression
// and this String. You can find out if the pattern is found and its index.

let str = "hey JudE";
let regex = /[A-Z]/g;
let regex2 = /[.]/g;

console.log(str.search(regex)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(regex2)); // returns -1 as it cannot find '.'
