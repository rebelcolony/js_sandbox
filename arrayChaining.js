// method chaining. When a method returns an array you can chain any other array method.

const arr = [1, 2, 3];

const smallerArr = arr
  .filter(number => number !== 2)
  .map(number => number + 1);

console.log(smallerArr);


// Quiz
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let displayYears;
// displayYears should be: ["2015 A.D.", "2013 A.D.", "2012 A.D."]
displayYears = years
  .filter(year => year >= 2001)
  .map(year => `${ year.toString() } A.D.`)

console.log(displayYears);

// Quiz - using filter remove 'Samir'
const users = [
  {name: 'Samir'},
  {name: 'Angela'},
  {name: 'Beatrice'}
];

const updatedUsers = users.filter(user => user.name !== 'Samir');
console.log(updatedUsers);

// Quiz - use map to produce an array of strings to display each users age'
// 'Samir is 27 years old'
const newUsers = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42}
];

displayArray = newUsers.map(user => `${user.name} is ${user.age} years old`);
console.log(displayArray);

// Quiz - use reduce to create a single new object with user name as the property and the age as the value
const newObject = newUsers.reduce((usersObject, user ) => {
  usersObject[user.name] = user.age;
  return  usersObject;
}, {});
console.log(newObject);


// Quiz - use reduce to produce a single object with name, age and waist as properties
// { Anna: 24, Gail: 26, Abby: 22}
const girls = [
  {name: 'Anna', age: 14, waist: 24},
  {name: 'Gail', age: 15, waist: 26},
  {name: 'Abby', age: 12, waist: 22}
];

const profileObject = girls.reduce((girlObject, girl) => {
  girlObject[girl.name] = girl.waist;
  return girlObject;
}, {});
console.log(profileObject);

// Quiz
const authors = [
  { firstName: "Beatrix", lastName: "Potter" },
  { firstName: "Ann", lastName: "Martin" },
  { firstName: "Beverly", lastName: "Cleary" },
  { firstName: "Roald", lastName: "Dahl" },
  { firstName: "Lewis", lastName: "Carroll" }
];
let fullAuthorNames;
// fullAuthorNames should be: ["Beatrix Potter", "Ann Martin", "Beverly Cleary", "Roald Dahl", "Lewis Carroll"]

fullAuthorNames = authors.map(author => `${author.firstName} ${author.lastName}`);
console.log(fullAuthorNames);

// Quiz convert this array into an array of objects with names only begining with S - [{name: 'Sammir'}, {name: 'Shaniqua'}, {name: 'Sean'}];
// combine filter() & map()
const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];

const sNames = userNames
  .filter(user => user[0] === 'S')
  .map( user => ({ name: user }) ); // just create the object

console.log(sNames);

// Quiz. filter() & map() to create an array of name strings of users over 30  - ['Angela', 'Beatrice', 'Shaniqua', 'Sean'];
const employees = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42},
  {name: 'Shaniqua', age: 30},
  {name: 'Marvin', age: 23},
  {name: 'Sean', age: 47}
];

const employeesOver30 = employees
  .filter(employee => employee.age >= 30)
  .map(employee => employee.name);

console.log(employeesOver30);

// Quiz. filter() and map() on the todos array to create an array of unfinishedTasks ["Buy apples", "Write web app", "Call mom"]
const todos = [
    {
        todo: 'Buy apples',
        done: false
    },
    {
        todo: 'Wash car',
        done: true
    },
    {
        todo: 'Write web app',
        done: false
    },
    {
        todo: 'Read MDN page on JavaScript arrays',
        done: true
    },
    {
        todo: 'Call mom',
        done: false
    }
];
let unfinishedTasks;
unfinishedTasks = todos
  .filter(task => task.done != true)
  .map(task => task.todo);

console.log(unfinishedTasks);

// Quiz. Find the product with the highest price under $10. Use filter() with reduce(). // Result: { name: 'paper towels', price: 6.99 }
const products = [
  { name: 'hard drive', price: 59.99 },
  { name: 'lighbulbs', price: 2.59 },
  { name: 'paper towels', price: 6.99 },
  { name: 'flatscreen monitor', price: 159.99 },
  { name: 'cable ties', price: 19.99 },
  { name: 'ballpoint pens', price: 4.49 }
];

const res = products
  .filter(product => product.price < 10.00)
  .reduce( (highest, product) => {
    if (highest.price > product.price) {
      return highest;
    }
    return product;
  });

console.log(res);

// Quiz. Using the same products array, return the total value for all the products over $10 using filter() and reduce()
const totalOver100 = products
  .filter(product => product.price > 10.00)
  .reduce( (total, product ) => total + product.price, 0 )
  .toFixed(2);

console.log(totalOver100);


// Quiz. Use filter() and reduce() on the purchaseItems array to add the total price of all the groceries
// items with a dept of groceries, groceryTotal should be: 9.47
const purchaseItems = [
    {
        name: 'apples',
        dept: 'groceries',
        price: 2.49
    },
    {
        name: 'bread',
        dept: 'groceries',
        price: 2.99
    },
    {
        name: 'batteries',
        dept: 'electronics',
        price: 5.80
    },
    {
        name: 'eggs',
        dept: 'groceries',
        price: 3.99
    },
    {
        name: 't-shirts',
        dept: 'apparel',
        price: 9.99
    }
];
let groceryTotal;

groceryTotal = purchaseItems
  .filter(item => item.dept == 'groceries')
  .reduce((total, item) => total + item.price, 0);

console.log(groceryTotal);

// Quiz. Using reduce() flatten the customerNames array.
// flattenedCustomerNames should be: ["John", "Sandy", "Tyrone", "Elizabeth", "Penny", "Barry", "Wanda", "Jamal", "Hayden", "Portia", "Pam", "Philip"]
const customerNames = [
    [ "John", "Sandy", "Tyrone", "Elizabeth", "Penny" ],
    [ "Barry", "Wanda", "Jamal", "Hayden" ],
    [ "Portia", "Pam", "Philip" ]
];
let flattenedCustomerNames;

flattenedCustomerNames = customerNames.reduce((newArray, names) => [...newArray, ...names], []);

console.log(flattenedCustomerNames);

// Quiz. Use reduce to flatten an array of favoriteBooks from each user.
// Result: ['The Iliad', 'The Brothers Karamazov', 'Tenth of December', 'Cloud Atlas', 'One Hundred Years of Solitude', 'Candide'];
const bookUsers = [
  {
    name: 'Samir',
    age: 27,
    favoriteBooks:[
      {title: 'The Iliad'},
      {title: 'The Brothers Karamazov'}
    ]
  },
  {
    name: 'Angela',
    age: 33,
    favoriteBooks:[
      {title: 'Tenth of December'},
      {title: 'Cloud Atlas'},
      {title: 'One Hundred Years of Solitude'}
    ]
  },
  {
    name: 'Beatrice',
    age: 42,
    favoriteBooks:[
      {title: 'Candide'}
    ]
  }
];

let userFavoriteMovies = bookUsers
  .map(user => user.favoriteBooks.map(book => book.title))
  .reduce((favoriteBooksArray, users) => [...favoriteBooksArray, ...users], []);

console.log(userFavoriteMovies);

// Quiz. Using reduce() extract all the customer hobbies into their own array.
// hobbies should be: ["Bicycling", "Camping", "Guitar", "Reading", "Gardening", "Comics", "Chess", "Legos"]
const customers = [
  {
    name: "Tyrone",
    personal: {
      age: 33,
      hobbies: ["Bicycling", "Camping"]
    }
  },
  {
    name: "Elizabeth",
    personal: {
      age: 25,
      hobbies: ["Guitar", "Reading", "Gardening"]
    }
  },
  {
    name: "Penny",
    personal: {
      age: 36,
      hobbies: ["Comics", "Chess", "Legos"]
    }
  }
];
let hobbies;

hobbies = customers
.map(customer => customer.personal.hobbies)
.reduce((hobbiesArray, hobbies) => [...hobbiesArray, ...hobbies], []);
console.log(hobbies);
