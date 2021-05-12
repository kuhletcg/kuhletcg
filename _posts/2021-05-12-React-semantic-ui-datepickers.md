---
Layout: post
Title: React-semantic-ui-datepickers
Date: 2021-05-12
---

Today Moral sends us a repo for tcg-tracker. He said we must go through his code and understand it. So I went through his code somewhere I did not understand what was happening.

- Firstly I didn't understand why he used react semantic UI date pickers.
- Secondly, I didn't know where do we use uid but it wasn't my first time the to people using uid.

So I used google to understand react semantic UI date pickers and uid.

## Description:

Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
-If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
-If he doesn't get 10 hoops, return the string "Keep at it until you get it".

## Solution

function hoopCount (n) {
return n>=10? "Great, now move on to tricks":"Keep at it until you get it"
}
