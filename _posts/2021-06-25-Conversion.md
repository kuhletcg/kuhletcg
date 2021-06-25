---
Layout: post
Title: Conversion
Date: 2021-06-25
---

- Description:
  Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
  Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA in its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
  Create a function that translates a given DNA string into RNA.
  For example:
  DNAtoRNA("GCAT") returns ("GCAU")
  \*/

## Solusion

function DNAtoRNA(dna){
return dna.replace(/T/g, 'U');
}

## Converting to Upper and LowerCase

- Convert to upper case

let text1 = "Hello World!"; // String
let text2 = text1.toUpperCase();

- Convert to lower case

let text1 = "Hello World!"; // String
let text2 = text1.toLowerCase();

## Instrutions

Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
Task:
You have to write a function that accepts three parameters: the cap is the number of people the bus can hold excluding the driver, on is the number of people on the bus, and wait is the number of people waiting to get on to the bus. If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

> > > enough(10, 5, 5)
> > > 0 # He can fit all 5 passengers
> > > enough(100, 60, 50)
> > > 10 # He can't fit only 10 out of 50 waiting
> > > For JavaScript:
> > > enough(10, 5, 5);
> > > // 0, He can fit all 5 passengers
> > > enough(100, 60, 50);
> > > // 10, He can't fit 10 out of 50 waiting

## Solusion

- function enough(cap, on, wait) {
- return (on+wait > cap) ? on+wait-cap : 0;
- }
