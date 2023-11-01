let a = 1;         

function logA() {
  console.log(a);  
  a += 1;         
}
logA();
console.log(a);

/*
On line 1, the let keyword declares a global variable `a` and initialize it to a number `1`.
On line 3-6 we define a function `logA` that rececives no parameters. within this function
On line 4 we `console.log` the global variable `a` to the console and on line 5 we increment 
the global variable `a` by 1 effectively modifying the global variable. On line 7
we invoke the function `logA` which jumps us back to line 4 in the function `console.log` is
invoked passing in the global variable `a` which outputs the value `1`. On the next line it then 
increments the global variable `a` by 1 so now the output of the global variable `a`
becomes 2.


*/