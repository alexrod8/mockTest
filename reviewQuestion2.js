let greeting = 'Hello';

while (true) {
  greeting = 'Hi';
  break;
}

console.log(greeting);

/* on line 1 we are declaring a variable greeting and initalizing to a string `hello`.
On line 3 and 6 we are defing a loop that will excute forever unless something happends to end the loop.
As the loops begins on line 4 we are reassigning the value of the global variable greeting to a 
string `hi`. then on line 5 we use the break statement which causes the loop to end. finally on line 8 we output the string `hi`
to the console since greeting got reassigned to `hi` since greeting is a global variable which can be used anywhere in the code. 



*/