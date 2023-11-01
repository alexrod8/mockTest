let greeting = 'Hello';

while (true) {
   greeting = 'Hi';
  break;
}

console.log(greeting);

/* On line 1 we declare a variable `greeting` and initialize it to a string `hello`.
Line 3-6 we are definng a while loop that will run forever unless it breaks. In the while loop on
we reassign the global variable `greeting` value to `hi`. Then on line 5 we use the break
statment to get out of the loop. Finally on line 8 we output the global variable greeting 
which has a value of hi to the console because in the loop greeting was reassgined to the value 
`hi`.

*/