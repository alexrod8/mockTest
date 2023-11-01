//What does this code print and why?

function replace(str, value) {
  while (true) {
    break;
  }

  str = value;
  
}

let greet = 'Hey!'
replace(greet, 'Hello')
console.log(greet);

/*
It prints out `Hey!` because changes made to parameters within a function doesnt the affect global variable `greet` in 
in the outer scope.
*/