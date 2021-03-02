---
Layout: post
Title: Filter out
Date: 2021-03-02
---

# Introduction

## Filter out

To filter out something from a substance or from light means to remove it bypassing the substance or light through something acting as a filter.

# Body

## Advanced filtering

If you need to filter for something specific, basic filtering may not give you enough options. Fortunately, Excel includes many advanced filtering tools, including search, text, date, and number filtering, which can narrow your results to help find exactly what you need.

If your worksheet contains a lot of content, it can be difficult to find information quickly. Filters can be used to narrow down the data in your worksheet, allowing you to view only the information you need.

## Exmple

### Description:

Write a function, loose filter/goose_filter/GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.
The geese are any strings in the following array, which is pre-populated in your solution:
geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:
["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:
["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
\*/

## Solution

function gooseFilter (birds) {
var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
return birds.filter(b => !geese.includes(b));
};

# Conclusion

To use advanced number filters:
Advanced number filters allow you to manipulate numbered data in different ways. In this example, we will display only certain types of equipment based on the range of ID numbers.
