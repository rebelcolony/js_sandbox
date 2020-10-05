// Use the map function to change each element in an array.
// A new array is returned with the same number of elements as the original.

const strings = ['1', '2', '3', '4', '5'];
const numbers = strings.map(string => parseInt(string, 10));
console.log(numbers);

// Quiz - Capitalize the strings in the fruit array using map
const fruits = ['apple', 'pear', 'cherry'];
const capitalizedFruits = fruits.map( fruit => fruit.toUpperCase() );

console.log(capitalizedFruits);

// Quiz - Use map to change this array of numbers into price strings
const prices = [5, 4.23, 6.4, 8.09, 3.20]; // Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]

// original solution
// const stringPrices = prices.map( price => parseFloat(Math.round(price * 100) / 100).toFixed(2).toString().padStart(5, '£') );

// better solution
// const stringPrices = prices.map( price => `£${price.toFixed(2)}` );

// even better solution
const priceToPounds = price => `£${price.toFixed(2)}`;
const stringPrices = prices.map( priceToPounds );
console.log(stringPrices);

// Quiz - create a new array of abbreviated week days. abbreviatedDays should be: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let abbreviatedDays;

abbreviatedDays = daysOfWeek.map( day => day.substring(0,3) );
