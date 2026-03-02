// Helper function to merge two sorted arrays
const merge = (left: number[], right: number[]): number[] => {
    const result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add remaining elements from left array
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // Add remaining elements from right array
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
};

// Merge sort algorithm
const mergeSort = (array: number[]): number[] => {
    // Base case: array with 0 or 1 element is already sorted
    if (array.length <= 1) {
        return array;
    }

    // Divide: split array into two halves
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    // Conquer: recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Combine: merge the sorted halves
    return merge(sortedLeft, sortedRight);
};

// Examples
console.log("=== Merge Sort Examples ===\n");

// Example 1: Unsorted array
const arr1 = [38, 27, 43, 3, 9, 82, 10];
console.log("Example 1 - Random array:");
console.log("Input: ", arr1);
console.log("Output:", mergeSort(arr1));
console.log();

// Example 2: Already sorted array
const arr2 = [1, 2, 3, 4, 5];
console.log("Example 2 - Already sorted:");
console.log("Input: ", arr2);
console.log("Output:", mergeSort(arr2));
console.log();

// Example 3: Reverse sorted array
const arr3 = [5, 4, 3, 2, 1];
console.log("Example 3 - Reverse sorted:");
console.log("Input: ", arr3);
console.log("Output:", mergeSort(arr3));
console.log();

// Example 4: Array with duplicates
const arr4 = [64, 34, 25, 12, 22, 11, 90, 88, 34, 12];
console.log("Example 4 - Array with duplicates:");
console.log("Input: ", arr4);
console.log("Output:", mergeSort(arr4));
console.log();

// Example 5: Single element
const arr5 = [42];
console.log("Example 5 - Single element:");
console.log("Input: ", arr5);
console.log("Output:", mergeSort(arr5));
console.log();

// Example 6: Empty array
const arr6: number[] = [];
console.log("Example 6 - Empty array:");
console.log("Input: ", arr6);
console.log("Output:", mergeSort(arr6));