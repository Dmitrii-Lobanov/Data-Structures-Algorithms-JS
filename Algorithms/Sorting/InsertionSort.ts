const insertionSort = (array: number[]): number[] => {
    const length = array.length;

    for (let i = 1; i < length; i++) {
        const key = array[i];
        let j = i - 1;

        // Shift elements greater than key one position to the right
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }

        // Insert the key in its correct position
        array[j + 1] = key;
    }

    return array;
};

// Test cases
console.log(insertionSort([5, 2, 8, 1, 9])); // Output: [1, 2, 5, 8, 9]
console.log(insertionSort([64, 34, 25, 12, 22, 11, 90])); // Output: [11, 12, 22, 25, 34, 64, 90]
console.log(insertionSort([1, 2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5] (already sorted)
console.log(insertionSort([])); // Output: []