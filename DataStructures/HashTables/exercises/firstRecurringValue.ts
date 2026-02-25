// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined


// Naive solution: O(n^2) time complexity
function firstRecurringValue(arr: number[]): number | undefined {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
}

console.log(firstRecurringValue([2,5,1,2,3,5,1,2,4])); // Output: 2
console.log(firstRecurringValue([2,1,1,2,3,5,1,2,4])); // Output: 1
console.log(firstRecurringValue([1,5,5,1,3,4,6]));
console.log(firstRecurringValue([2,3,4,5])); // Output: undefined

// Better solution: O(n) time complexity
function firstRecurringValueOptimized(arr: number[]): number | undefined {
  const seen: Record<number, boolean> = {};
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      return arr[i];
    }

    // true needs to avoid the case when arr[i] is 0, which is falsy in JavaScript
    seen[arr[i]] = true;
  }
  return undefined;
}

console.log(firstRecurringValueOptimized([2,5,1,2,3,5,1,2,4])); // Output: 2
console.log(firstRecurringValueOptimized([2,1,1,2,3,5,1,2,4])); // Output: 1
console.log(firstRecurringValueOptimized([1,5,5,1,3,4,6]));
console.log(firstRecurringValueOptimized([2,3,4,5])); // Output: undefined 
console.log(firstRecurringValueOptimized([0,3,0,5])); // Output: 0  