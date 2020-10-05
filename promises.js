const calculationPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(1 + 1);
  }, 1000);
});

addTwo = (value) => {
  return value + 2;
}

function printFinalValue(nextValue) {
  console.log("The final value is ", nextValue);
}

calculationPromise
  .then(addTwo)
  .then(printFinalValue);
