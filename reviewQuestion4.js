let a = "Hello";

if (a) {
  console.log("Hello is truthy");
} else {
  console.log("Hello is falsy");
}

/*
On line we delcare a global variable `a` and initalize it to string `hello`.
On line 3 since the global variable `a` value is a string so the if statement 
evaluates to truthy because its a non-empty string so "Hello is truthy" is logged to 
the console
*/