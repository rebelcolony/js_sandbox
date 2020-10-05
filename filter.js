// the filter method creates a new array with all elements that
// pass the conditional statement

const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
const startsWithS = name => name.charAt(0) === 'S';
const sNames = names.filter(startsWithS);
console.log(sNames);

//
const numbers = [1,2,3,4,5];

// filter the 3 out
const no3 = numbers.filter(number => number !== 3);
console.log(no3);

// filter the 2 out
const no2 = numbers.filter(number => number !== 2);
console.log(no2);

// return only the 2
const only2 = numbers.filter(number => number === 2);
console.log(only2);

// Quiz
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20;

// century20 should be: [1989, 2000, 1999, 1973]
// Write your code below
century20 = years.filter(year => year < 2001)
console.log(century20);
