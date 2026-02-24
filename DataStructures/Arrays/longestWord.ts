/**
    Have the function LongestWord(sen) take the sen parameter being passed and return 
    the longest word in the string. If there are two or more words that are the same length, 
    return the first word from the string with that length. 

    Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
*/

const longestWord = (sen: string): string => {
    const words: string[] = sen.match(/\b\w+\b/g) || []; // Extract words, ignoring punctuation
    let longest: string = "";

    console.log(words); // Debug: Check the extracted words

    for (const word of words) {
        if (word.length > longest.length) {
            longest = word; // Update longest if current word is longer
        }
    }

    return longest;
}

console.log(longestWord("fun&!! time"));