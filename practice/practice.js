// A function that reverse words


const reverseWords = string => {
 var reversedWord = string.split("").reverse().join('');
 return reversedWord
 console.log(reversedWord);
}

console.log(reverseWords("Sibonokuhle"));
