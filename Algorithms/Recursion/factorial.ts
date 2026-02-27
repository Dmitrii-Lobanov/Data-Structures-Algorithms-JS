// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop.

// Recursive solution
function factorialRecursive(n: number): number {
  if (n === 2) {
    return 2;
  }

  return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(5)); // Output: 120

// Iterative solution
function factorialIterative(n: number): number {
  let result = 1;

  if (n === 2) {
    return 2;
  }

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorialIterative(5)); // Output: 120