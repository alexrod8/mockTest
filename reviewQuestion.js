let hello = "Hello, world!";
function myFunc() {
  console.log(hello);
}

myFunc();

/* On line 1 we delcare a global variable `hello` and initialize to a string `Hello, world`.
On line 6 we invoke the function myFunc. Javascript jumps us into the function myFunc which is 
calling console.log with the value of the global variable `hello` passed to as it argument.
The function terminates and outputs `Hello world!` to the console because global variables
can be accessed anywhere in the code including function scopes.


*/ 