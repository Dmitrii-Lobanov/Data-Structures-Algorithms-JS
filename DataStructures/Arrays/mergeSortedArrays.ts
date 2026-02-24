// Create a function that merges two sorted arrays into one sorted array

const mergeSortedArrays = (arr1: number[], arr2: number[]): number[] => {
    if (!arr1.length) return arr2;
    if (!arr2.length) return arr1;

    const mergedArray: number[] = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
};

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); // Output: [0, 1, 2, 3, 4, 5]
