function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Inputs must be numbers';
  }
  return a + b;
}

console.log(foo(1, '1')); // Output: Error: Inputs must be numbers

function foo2(a, b) {
    return parseInt(a) + parseInt(b);
}

console.log(foo2(1, "1")); //Output: 2