const readline = require('readline-sync');

function prompt(msg) {
  console.log('=> ' + msg);
}


prompt('Welcome To My Calculator!');
prompt('--------------------------');

while (true) {
  prompt('Enter the first number: ');
  let firstNumber = readline.question();
  while (isNaN(firstNumber)) {
    prompt('Have to enter a Number!');
    firstNumber = readline.question();
  }
  prompt('Enter the second number: ');
  let secondNumber = readline.question();
  while (isNaN(secondNumber)) {
    prompt('Have to enter a Number!');
    secondNumber = readline.question();
  }
  prompt('What operation would you like to perform?\n 1)Adding(+) 2)Subtraction(-) 3)Multiply(*) 4)Divide(/)')
  let vaildNumbers = ['1', '2', '3', '4'];
  let operation = readline.question();
  while (!vaildNumbers.includes(operation)) {
    prompt('Have to enter either 1,2,3 or 4!');
    operation = readline.question();
  }
  let output;
  switch (operation) {
    case '1': output = Number(firstNumber) + Number(secondNumber);
      break;
    case '2': output = Number(firstNumber) - Number(secondNumber);
      break;
    case '3': output = Number(firstNumber) * Number(secondNumber);
      break;
    case '4': output = Number(firstNumber) / Number(secondNumber);
      break;
  }
  prompt('Result: ' + output);
  prompt('Would you like to do perform another Calculation?')
  let answer = readline.question().toLowerCase();
  if (answer === 'no') {
    console.log('Have a nice day!');
    break;
  }
}

