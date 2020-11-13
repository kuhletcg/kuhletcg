---
Layout: 
Title: "Invert values kata"
Date: "2020-11-13"
---

# Introduction

I was busy with Free code camp, code wars and I was checking my mistake on my assignment that we were given. I realized that I have made many mistakes on my assignment but it was a lesson because it was my first time doing AIP. I have learned from my mistakes.


# Boby

# Description:
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers.
*/


## Solusion
function invert(array) {
   return array.map( x => x === 0 ? x : -x);
}