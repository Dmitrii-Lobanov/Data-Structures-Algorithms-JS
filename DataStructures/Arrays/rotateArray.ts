/**
    Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

    Example 1:

    Input: nums = [1,2,3,4,5,6,7], k = 3
    Output: [5,6,7,1,2,3,4]
    Explanation:
    rotate 1 steps to the right: [7,1,2,3,4,5,6]
    rotate 2 steps to the right: [6,7,1,2,3,4,5]
    rotate 3 steps to the right: [5,6,7,1,2,3,4]
    Example 2:

    Input: nums = [-1,-100,3,99], k = 2
    Output: [3,99,-1,-100]
    Explanation: 
    rotate 1 steps to the right: [99,-1,-100,3]
    rotate 2 steps to the right: [3,99,-1,-100]
 */

const rotate = (nums: number[], k: number): void => {
    const n: number = nums.length;
    k = k % n; // Handle cases where k is greater than n

    // Reverse the entire array
    reverse(nums, 0, n - 1);
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    // Reverse the remaining n-k elements
    reverse(nums, k, n - 1);
}

const reverse = (nums: number[], start: number, end: number): void => {
    while (start < end) {
        const temp: number = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

const arr1: number[] = [1, 2, 3, 4, 5, 6, 7];
rotate(arr1, 3);
console.log(arr1); // Output: [5,6,7,1,2,3,4]

const arr2: number[] = [-1, -100, 3, 99];
rotate(arr2, 2);
console.log(arr2); // Output: [3,99,-1,-100]    

// Extra space 0(1) solution

const rotate2 = (nums: number[], k: number): void => {
    const n: number = nums.length;
    k = k % n; // Handle cases where k is greater than n

    const temp: number[] = nums.slice(n - k); // Store the last k elements
    for (let i = n - 1; i >= k; i--) {
        nums[i] = nums[i - k]; // Shift elements to the right
    }
    for (let i = 0; i < k; i++) {
        nums[i] = temp[i]; // Place the stored elements at the beginning
    }
}

const arr3: number[] = [1, 2, 3, 4, 5, 6, 7];
rotate2(arr3, 3);
console.log(arr3); // Output: [5,6,7,1,2,3,4]

const arr4: number[] = [-1, -100, 3, 99];
rotate2(arr4, 2);
console.log(arr4); // Output: [3,99,-1,-100]

// Solution using slice and concat

const rotate3 = (nums: number[], k: number): void => {
    const n: number = nums.length;
    k = k % n; // Handle cases where k is greater than n

    const rotated: number[] = nums.slice(n - k).concat(nums.slice(0, n - k));
    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
}

const arr5: number[] = [1, 2, 3, 4, 5, 6, 7];
rotate3(arr5, 3);
console.log(arr5); // Output: [5,6,7,1,2,3,4]

const arr6: number[] = [-1, -100, 3, 99];
rotate3(arr6, 2);
console.log(arr6); // Output: [3,99,-1,-100]