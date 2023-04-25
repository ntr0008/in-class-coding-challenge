// Create a function that filters out negative numbers
// In this challenge, you’ll have a function that takes an array as input and returns an array.
// But if all goes according to plan, it’ll remove the negative numbers.
// This is another example of a task
// that’ll be useful when combing through data and looking for clever ways to eliminate “bad data.”

let numbers = [10, -34, -54, 76, 32, -81, 21];
numbers = numbers.filter(function (x) {
  return x > -1;
});
console.log(numbers);
