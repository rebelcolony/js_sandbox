// the forEach method executes a provided function once for each array element.

const fruits = ['apple', 'pear', 'cherry'];

// for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// forEach loop
fruits.forEach(fruit => console.log(fruit));

// forEach practise
let capitalizedFruits = [];

fruits.forEach(fruit => {
  let capitalizedFruit = fruit.toUpperCase();
  capitalizedFruits.push(capitalizedFruit);
});

console.log(capitalizedFruits);

// forEach practise: calculate total cost
const prices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97

let sum = 0;
prices.forEach(price => {
  sum = sum + price
});

console.log(sum);

// forEach with index
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

names.forEach((name, index) => console.log(`${index + 1}) ${name}`));
names.forEach( (name, index) => console.log(name, index) );

// quiz
const numbers = [1,2,3,4,5,6,7,8,9,10];
let times10 = [];

// times10 should be: [10,20,30,40,50,60,70,80,90,100]
// Write your code below
numbers.forEach(number => times10.push(number * 10) );

console.log('times10 array: ', times10);

console.log('========Quiz==================================================');

// Quiz 1
const numbers2 = [1, 2, 3, 4, 5];
let total = 0;

// Write loop here:
numbers2.forEach(number => total += number);
console.log(total);

// Quiz 2
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayAbbreviations = [];

// dayAbbreviations should be: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
// Write your code below

// days.forEach(day => {
//   dayAbbreviations.push( day.charAt(0) + day.charAt(1) );
// });

// alternative solution
days.forEach( day => dayAbbreviations.push(day.slice(0, 2)) );

console.log(dayAbbreviations);

// Quiz 3
const stringPrices = ['5.47', '3.12', '8.00', '5.63', '10.70'];
let priceTotal = 0;

// priceTotal should be: 32.92
// Write your code below
stringPrices.forEach( price => priceTotal += parseFloat(price) );

console.log('priceTotal:', priceTotal);

// Quiz 4
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let noel = [];

// noel should be: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// Write your code below
alphabet.forEach(letter => {
  if (letter != 'L') {
    noel.push(letter);
  }
});

console.log(noel);

// Quiz 5
const percentages = [34, 67, 12, 39, 90, 82, 22, 24, 99];
let upperRange = [];

// upperRange should be: [67, 90, 82, 99]
// Write your code below
percentages.forEach(percentage => {
  if (percentage > 50) {
    upperRange.push(percentage);
  }
});
console.log('upperRange:', upperRange);

// Quiz 6
const colors = ['#87E2D0', '#559F4D', '#FFE0F4', '#7E7E7E', '#FF2D2D', '#F7FFEC'];
let filteredColors = [];

// filteredColors should be: ['#FFE0F4', '#FF2D2D', '#F7FFEC']
// Write your code below
colors.forEach(color => {
  if (color[1] === 'F') {
    filteredColors.push(color);
  }
});

// alternative solution

// colors.forEach(color => {
//   if (color.charAt(1) === 'F') {
//     filteredColors.push(color);
//   }
// });

console.log('filteredColors:', filteredColors);

// Quiz 7
const months = ['january', 'february', 'march', 'april', 'may'];
let capitalizedMonths = [];

// filteredColors should be: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY']
// Write your code below

months.forEach(month => capitalizedMonths.push( month.toUpperCase() ));

console.log('capitalizedMonths:', capitalizedMonths);
