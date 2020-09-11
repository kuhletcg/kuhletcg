---
Layout: 
Title: Missing letters
Date: 2020-09-11 
 ---
 
 This week I was busy with strings , code wars and free code camp.
  
  ## Example: String length
  To find the length of a string , use the built-in length property.

  - var text = "ABCD";
  - Var sin = text.length;
 
## The slice() method
var str = "Apple, banana , orange";
var res = String.slice(7, 13);
 result will be Banana

 # Description
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

- fearNotLetter("abce") should return "d".
Passed
- fearNotLetter("abcdefghjklmno") should return "i".
Passed
- fearNotLetter("stvwx") should return "u".
Passed
- fearNotLetter("bcdf") should return "e".
Passed
- fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return unde

# Solution
 function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}