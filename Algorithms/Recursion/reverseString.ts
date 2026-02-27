// Write two functions that reverses a string. One should use recursive, the other should just use a for loop.

// Recursive solution
function reverseStringRecursive(str: string): string {
  if (str.length <= 1) {
    return str;
  }

  return str[str.length - 1] + reverseStringRecursive(str.slice(0, -1));
}

console.log(reverseStringRecursive("hello")); // Output: "olleh"

// Iterative solution
function reverseStringIterative(str: string): string {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(reverseStringIterative("hello")); // Output: "olleh"