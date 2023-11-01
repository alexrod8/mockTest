let foo = 'bar';
{
  let foo = 'qux';
}
console.log(foo);

/*
on line 1 we are declaring a variable `foo` and initializing it to a string `bar`.
On line 2-4 we have block scope containing a new variable named `foo` and initializing it
to a string `qux`. Finally on line 5 we output `bar` to the console since the global varible 
is shawdoing the local variable hence why it outputs `bar` instead of `qux` this is
what you call variable shadowing.

*/