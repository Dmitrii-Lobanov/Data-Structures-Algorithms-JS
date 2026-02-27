const selectionSort = (arr: number[]): number[] => {
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
};

// Example usage:
console.log(selectionSort([64, 34, 25, 12, 22, 11, 90])); // Output: [11, 12, 22, 25, 34, 64, 90]