---
Layout: post
Title: Add inlinr styling to elements
Date: 2021-03-10
---

# Description

## Add Inline Styling to Elements

D3 lets you add inline CSS styles on dynamic elements with the style() method.

The style() method takes a comma-separated key-value pair as an argument. Here's an example to set the selection's text color to blue:

selection.style("color","blue");

Add the style() method to the code in the editor to make all the displayed text have a font-family of Verdana.

## Instrusion

Passed
Your h2 elements should have a font-family of Verdana.

Passed
Your code should use the style() method.

## Answer

- <body>
  - <script>
     - const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

  - d3.select("body").selectAll("h2")
  - .data(dataset)
  - .enter()
  - .append("h2")
  - .text((d) => (d + " USD"))
  - .style("font-family", "verdana")

- </script>
- </body>

# Describtion

## Work with Dynamic Data in D3Passed

The last two challenges cover the basics of displaying data dynamically with D3 using the data() and enter() methods. These methods take a data set and, together with the append() method, create a new DOM element for each entry in the data set.

In the previous challenge, you created a new h2 element for each item in the dataset array, but they all contained the same text, New Title. This is because you have not made use of the data that is bound to each of the h2 elements.

The D3 text() method can take a string or a callback function as an argument:

selection.text((d) => d)

In the example above, the parameter d refers to a single entry in the dataset that a selection is bound to.

Using the current example as context, the first h2 element is bound to 12, the second h2 element is bound to 31, the third h2 element is bound to 22, and so on.

Change the text() method so that each h2 element displays the corresponding value from the dataset array with a single space and the strong USD. For example, the first heading should be 12 USD.

## Instruction

- The first h2 should have the text 12 USD.

- The second h2 should have the text 31 USD.

- The third h2 should have the text 22 USD.

- The fourth h2 should have the text 17 USD.

- The fifth h2 should have the text 25 USD.

- The sixth h2 should have the text 18 USD.

- The seventh h2 should have the text 29 USD.

- The eighth h2 should have the text 14 USD.

- The ninth h2 should have the text 9 USD.

## Answer

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      
      .text((d) => d + ' USD');
      
  </script>
</body>

## Description

We need a function that can transform a number into a string.

What ways of achieving this do you know?

## Examples:

numberToString(123); // returns '123';` numberToString(999); // returns '999';`

## Solution

- function numberToString(num) {
- return num.toString();
- }
