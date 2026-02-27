// Write two functions that finds the nth Fibonacci number. One should use recursive, the other should just use a for loop.

// Recursive solution
// O(2^n) time complexity and O(n) space complexity
function fibonacciRecursive(n: number): number {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(10)); // Output: 55

// Iterative solution
// O(n) time complexity and O(1) space complexity
function fibonacciIterative(n: number): number {
  if (n <= 1) {
    return n;
  }

  let a = 0, b = 1, temp;

  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

console.log(fibonacciIterative(10)); // Output: 55

// Another iterative solution using an array to store Fibonacci numbers, which has O(n) time complexity and O(n) space complexity
function fibonacciIterative2(n: number): number {
    let arr = [0, 1];

    for (let i = 2; i <=n; i++) {
        arr[i] = arr[i - 1] + arr [i - 2];
    }

    return arr[n];
}

console.log(fibonacciIterative2(10)); // Output: 55