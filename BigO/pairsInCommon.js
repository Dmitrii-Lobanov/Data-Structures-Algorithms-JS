// https://www.youtube.com/watch?v=XKu_SEDAykw

/** 
     * Given two arrays, create a function that let's a user know 
     * (true/false) whether these two arrays contain any common items
     * For Example:
     * const array1 = ['a', 'b', 'c', 'x'];
     * const array2 = ['z', 'y', 'i'];
     * should return false
     * 
     * const array1 = ['a', 'b', 'c', 'x'];
     * const array2 = ['z', 'y', 'x'];
     * should return true
 */



const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
const array3 = ['a', 'b', 'c', 'x'];
const array4 = ['z', 'y', 'x'];

// Naive and ineffective solution O(a*b)
const containsCommonItem = (arr1, arr2) => {
    // Early return if either array is null or undefined or empty
    if (!arr1 || !arr2) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(containsCommonItem(array1, array2)); // false
console.log(containsCommonItem(array3, array4)); // true

// Better solution O(a+b)
const arrayToObject = (array) => {
    let map = {};

    for (let i = 0; i < array.length; i++) {
        if (!map[array[i]]) {
            const item = array[i];
            map[item] = true;
        }
    }

    return map;
}

const containsCommonItem2 = (arr1, arr2) => {
    // Early return if either array is null or undefined or empty
    if (!arr1 || !arr2) {
        return false;
    }

    const map = arrayToObject(arr1);

    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true;
        }
    }
    return false;
}

console.log(containsCommonItem2(array1, array2)); // false
console.log(containsCommonItem2(array3, array4)); // true

// Best solution O(a+b) using built-in methods
const containsCommonItem3 = (arr1, arr2) => {
    // Early return if either array is null or undefined or empty
    if (!arr1 || !arr2) {
        return false;
    }

    return arr1.some(item => arr2.includes(item));
}

console.log(containsCommonItem3(array1, array2)); // false
console.log(containsCommonItem3(array3, array4)); // true