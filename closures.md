In JavaScript, a closure is a function along with its lexical scope, which allows the function to access variables from its outer (enclosing) scope even after that scope has finished executing. Closures are a powerful feature in JavaScript and are commonly used for tasks like data encapsulation, creating private variables, and maintaining state.

Here's a simple example of a closure in JavaScript:

```js
function outerFunction(x) {
  // innerFunction is defined inside outerFunction
  function innerFunction(y) {
    // innerFunction can access the variables x from its outer scope
    return x + y;
  }

  // outerFunction returns the innerFunction
  return innerFunction;
}

// Create a closure by calling outerFunction with a value for x
var closure = outerFunction(10);

// Now, use the closure to add a value to x (10 in this case)
var result = closure(5);

console.log(result); // Output: 15
```

In this example, outerFunction takes a parameter x and defines an innerFunction inside it. innerFunction can access the variable x from its outer scope, even after outerFunction has finished executing. When you call outerFunction(10), it returns the innerFunction, creating a closure. Later, when you invoke closure(5), it adds 5 to the value of x (which is 10) and returns the result (15).
