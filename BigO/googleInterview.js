// Naive solution O(a*b) - nested loops (O(n^2))
function hasPairWithSum(arr, sum) {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
}

    return false;
}

console.log(hasPairWithSum([1, 2, 3, 4], 5)); // true
console.log(hasPairWithSum([1, 2, 3, 4], 8)); // false

// Better solution O(n) - using a hash set
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {

        return true;
    }
    mySet.add(sum - arr[i]);
  } 

  return false;
}

console.log(hasPairWithSum2([1, 2, 3, 4], 5)); // true
console.log(hasPairWithSum2([1, 2, 3, 4], 8)); // false

// Best solution O(n log n) - sorting and two pointers
function hasPairWithSum3(arr, sum) {
  arr.sort((a, b) => a - b); // Sort the array in ascending order
  let left = 0; // Start pointer
  let right = arr.length - 1; // End pointer

  while (left < right) {
    const currentSum = arr[left] + arr[right];

    if (currentSum === sum) {
      return true; // Found a pair that sums to the target
    } else if (currentSum < sum) {
      left++; // Move the left pointer to the right to increase the sum
    } else {
      right--; // Move the right pointer to the left to decrease the sum
    }
  }

  return false; // No pair found that sums to the target
}

console.log(hasPairWithSum3([1, 2, 3, 4], 5)); // true
console.log(hasPairWithSum3([1, 2, 3, 4], 8)); // false