let text;

// Write a for loop to build a string of numbers from 0 to 4,
// separated by spaces, and store the string in the variable `text`.
print('1st Loop:');
text = '';

// Write 1st loop here:
for(let i = 0; i <= 4; i += 1) {
  text += i + ' ';
}

print(text); // Should print `0 1 2 3 4 `.

// 2. Write a for loop to build a string of numbers from 1 to 5,
//    separated by spaces, and store the string in the variable `text`.
print('2nd Loop:');
text = '';

// Write 2nd loop here:
for (let i = 0; i <= 5; i += 1) {
  text += i + ' ';
}

print(text); // Should print `1 2 3 4 5 `.

// 3. Write a for loop to build a string of numbers from 5 to 1,
//    separated by spaces, and store the string in the variable `text`.
print('3rd Loop:');
text = '';

// Write 3rd loop here:
for (let i = 5; i >= 1; i -= 1) {
  text += i + ' ';
}

print(text); // Should print `5 4 3 2 1 `.

// 4. Write a for loop to build a string of numbers from 5 to 50--by 5's.
//    The numbers should be separated by spaces, and stored in the variable `text`.
print('4th Loop:');
text = '';

// Write 4th loop here:
for (let i = 5; i <= 50; i += 5) {
  text += i + ' ';
}

print(text); // Should print `5 10 15 20 25 30 35 40 45 50 `.

// 5. Write a for loop to build a string of numbers from 50 to 5--by 5's.
//    The numbers should be separated by spaces, and stored in the variable `text`.
print('5th Loop:');
text = '';

// Write 5th loop here:
for (let i = 50; i > 0; i -= 5) {
  text += i + ' ';
}

print(text); // Should print `50 45 40 35 30 25 20 15 10 5 `.


// Feel free to ignore this print function. It just formats the output a bit.
function print(text) {
  console.log(text);
  if (!text.endsWith(':')) {
    console.log('');
  }
}
