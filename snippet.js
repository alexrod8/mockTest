let greeting = ['Hello'];

const foo = (arr) => {
  arr = arr.push("World!");
  return arr;
};

console.log(foo(greeting));
console.log(greeting);


/* on line 1 we are declaring a global variable name greeting and initializing to an array ['hello'].
then on line 3 we are declaring a function foo it defines one parameter `arr`. In the function 
scope we are assiging arr and using the push method that adds the string 'World!' to the arr. Next we are returning the modfifed arr.
On line 8 we console.log the function foo which adds 'World' and returns the length of the modifed array which is 2. finally 
On line 9 we console.log the global variable greeting and it prints out ['Hello', 'World'] since its a pass by refrence
*/