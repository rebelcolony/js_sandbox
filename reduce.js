// Reduce will return a single computed value from an array.

var total = [ 0, 1, 2, 3 ].reduce(
  ( acc, cur ) => acc + cur,
  0
);
console.log(total);

// use reduce to add these prices together and log the result
const prices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97
const priceTotal = prices.reduce( (sum, price) => sum + price, 0 );
console.log(priceTotal);

// Quiz - Return the number of names that begin with the letter G
const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony']; // Result: 4
const namesWithG = names.reduce( (count, name) => name[0] === 'G' ? count + 1 : count, 0);
console.log('namesWithG:', namesWithG);

// Quiz - Using reduce return the number of phone numbers with a 503 area code. numberOf503 should be: 3
const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503;
re = /(503)/g;
numberOf503 = phoneNumbers.reduce( (sum, number) => number.match(re) ? sum + 1 : sum, 0 );
console.log('numberOf503:', numberOf503);
