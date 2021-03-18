---
Layout: post
Title: Sorting array numerically
Date: 2021-03-18
---

# Sorting Array Numerically

Sorting is a common task when working with arrays. It would be used, for instance, if you want to display the city or county names in alphabetical order.
In order to sort arrays numerically, we just need to pass a parameter to the sort() or reverse() method.

This parameter is needed to be a function that should compare just two elements. Thanks to that we can override the sort() and reverse() methods default comparison logic.

In our case, we want to make this logic a numeric comparison but don’t forget that we can also apply a custom comparison logic.

## To compare function implementation generally you need to.

- The function should take two parameters.
- If you think the first parameter should be before the second parameter return a negative number.
- If you think the first parameter should be after the second parameter return a positive number bigger than zero.
- If you think two parameters are equal or there is no need to take any action just return number zero.

For numeric comparison, we just need to compare two numbers.

## If you want to order an array in ascending order, you should use the sort() method:

## Example 1

let numbers = [24, 8, 23, 32, 5, 62];
numbers.sort((a, b) => a - b);
console.log(numbers);

## You can also test these sort() and reverse() methods on a numeric array, and for our example, you can get the results as below:

## Example 2

let myNumericArray = [4, 1, 3, 2];
myNumericArray.sort();

- output is [1, 2, 3, 4]
  myNumericArray.reverse();
- output is [4, 3, 2, 1]

Reversing an Array
You can use the reverse() method to reverse the order of the elements of an array.

# Conclusion

I hope now I can use sort() and reverse() methods for sorting numeric or alphabetic arrays without any hesitation.
The sort order is determined by the compared callback method, which is what allows you to determine the sort order or what object properties determine the sort order.
