// Create a function that reverses a string

function reverseString(str: string): string {
    if (!str || str.length < 2 || typeof str !== "string") {
        return "Please provide a string with more than 1 character";
    }

  // Step 1. Create an empty string that will host the new created string
  let newString = "";

  // Step 2. Create a for loop that will iterate through the string provided as an argument in reverse
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  // Step 3. Return the reversed string
  return newString;
}

// Using built-in methods
const reverseString2 = (str: string): string => {
  return str.split("").reverse().join("");
}

console.log(reverseString("Create a function that reverses a string"));
console.log(reverseString2("Create a function that reverses a string"));