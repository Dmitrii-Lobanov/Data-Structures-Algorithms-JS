/**
    Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

    Example 1:

    Input: nums = [1,2,3,1]

    Output: true

    Explanation:

    The element 1 occurs at the indices 0 and 3.

    Example 2:

    Input: nums = [1,2,3,4]

    Output: false

    Explanation:

    All elements are distinct.

    Example 3:

    Input: nums = [1,1,1,3,3,4,3,2,4,2]

    Output: true
 */

const containsDuplicate = (nums: number[]): boolean => {
    const numSet: Set<number> = new Set();

    for (const num of nums) {
        if (numSet.has(num)) {
            return true;
        }
        numSet.add(num);
    }

    return false;
}

console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true

// Another solution

const containsDuplicate2 = (nums: number[]): boolean => {
    const numMap: { [key: number]: boolean } = {};

    for(const num of nums) {
        if (numMap[num]) {
            return true;
        }
        numMap[num] = true; 
    }

    return false;
}

console.log(containsDuplicate2([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate2([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true