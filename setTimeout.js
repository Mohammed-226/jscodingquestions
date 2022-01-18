//1. JavaScript Program to Pass Parameter to a setTimeout() Function

// program to pass parameter to a setTimeout() function

function greet() {
  console.log("Hello world");
}

// passing parameter
setTimeout(greet, 1000);
console.log("This message is shown first");
