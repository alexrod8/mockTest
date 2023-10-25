let foo = 'bar';
{
  let foo = 'qux';
}
console.log(foo);

/*
On line 1 we are declaring a global variable name foo and initalizing it to a string `bar`.
On line 2 and 4 we create a scope and declare a new variable foo and initalize it to
a string named `qux`. On lines 2-4 we created a local scope which means we can only use that foo inside the scope or else it will give
you a refrence error.On line 5 we output `bar` to the console because on line 1 the variable foo
shawdows the foo inside the scope because its a local scope which can only be used inside the scope
hence why we output `bar` to the console. 

*/