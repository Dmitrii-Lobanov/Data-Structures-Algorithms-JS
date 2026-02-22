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