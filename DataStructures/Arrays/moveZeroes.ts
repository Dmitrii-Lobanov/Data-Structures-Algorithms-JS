/**
    Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

    Note that you must do this in-place without making a copy of the array.

    Example 1:

    Input: nums = [0,1,0,3,12]
    Output: [1,3,12,0,0]
    Example 2:

    Input: nums = [0]
    Output: [0]
 */

const moveZeroes = (nums: number[]): void => {
    let lastNonZeroFoundAt = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[lastNonZeroFoundAt], nums[i]] = [nums[i], nums[lastNonZeroFoundAt]];
            lastNonZeroFoundAt++;
        }
    }
}

const arr1 = [0, 1, 0, 3, 12];
moveZeroes(arr1);
console.log(arr1); // Output: [1, 3, 12, 0, 0]

const arr2 = [0];
moveZeroes(arr2);
console.log(arr2); // Output: [0]