---
Layout: 
Title: code wars kata
Date: 2020-09-28 
 ---

 This week I was busy with code wars. I have done an array plus kata, subtract the sum and beginner series. Wednesday and Thursday I was busy with free code camp and typing practice. Friday I was busy with my project.


1. Description:
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate your help.
P.S. Each array includes only integer numbers. The output is a number too.
*/

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

2. Description:
Subtract the sum
NOTE! This kata can be more difficult than regular 8-kyu katas

Complete the function which gets an input number n such that n >= 10 and n < 10000, then:
Sum all the digits of n.
Subtract the sum from n, and it is your new n.
If the new n is in the list below return the associated fruit, otherwise return back to task 1.
Example
n = 325
sum = 3+2+5 = 10
n = 325-10 = 315 (not in the list)
sum = 3+1+5 = 9
n = 315-9 = 306 (not in the list)
sum = 3+0+6 = 9
n =306-9 = 297 (not in the list)
.
.
.
...until you find the first n in the list below.
*/

function SubtractSum(n){
  return "apple"
}

3.Description:
Clock shows 'h' hours' minutes and 's' seconds after midnight.
Your task is to make 'Past' function which returns time converted to milliseconds.

# Example:
past(0, 1, 1) == 61000
Note! h, m, and s will be only Natural numbers! Waiting for translations and Feedback! Thanks!
*/

function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}