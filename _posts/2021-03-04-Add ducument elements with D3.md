---
Layout: post
Title: Add document elements with D3
Date: 2021-03-04
---

# Add Document Elements with D3

D3 has several methods that let you add and change elements in your document.

The select() method selects one element from the document. It takes an argument for the name of the element you want and returns an HTML node for the first element in the document that matches the name.

The above example finds the first anchor tag on the page and saves an HTML node for it in the variable anchor. You can use the selection with other methods. The "d3" part of the example is a reference to the D3 object, which is how you access D3 methods.

Two other useful methods append () and text().

The append() method takes an argument for the element you want to add to the document. It appends an HTML node to a selected item and returns a handle to that node.

The text() method either sets the text of the selected node or gets the current text. To set the value, you pass a string as an argument inside the parentheses of the method.

Here's an example that selects an unordered list, appends a list item, and adds text:

d3.select("ul")
.append("li")
.text("Very important item");
D3 allows you to chain several methods together with periods to perform a number of actions in a row.

# Instrutions

- The body should have one h1 element.

- The h1 element should have the text "Learning D3" in it.

- Your code should access the d3 object.

- Your code should use the select method.

- Your code should use the append method.

- Your code should use the text method.

# Solution

<body>
<h1>Learning D3</h1>
d3.select("d3")
  .append("select")
  .text("append");
  <script>
   
  </script>
</body>

# Select a Group of Elements with D3

D3 also has the selectAll() method to select a group of elements. It returns an array of HTML nodes for all the items in the document that match the input string. Here's an example to select all the anchor tags in a document:

const anchors = d3.selectAll("a");

Like the select() method, selectAll() supports method chaining, and you can use it with other methods.

Select all of the li tags in the document, and change their text to "list item" by chaining the .text() method.

- There should be 3 li elements on the page, and the text in each one should say "list item". Capitalization and spacing should match exactly.

Passed

- Your code should access the d3 object.

Passed

- Your code should use the selectAll method.

# Solution

<body>
  <ul>
    <li>list item</li>
    <li>list item</li>
    <li>list item</li>
  </ul>
  <script>
   const anchors = d3.selectAll("a");

  </script>
- </body>

# Work with Data in D3

- Your document should have 9 h2 elements.

Passed

- The text in the h2 elements should say "New Title". The capitalization and spacing should match exactly.

Passed

- Your code should use the data() method.

Passed

- Your code should use the enter() method.

# Solution

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    d3.select('body').selectAll('h2')
      .data(dataset)
      .enter()
      .append('h2')
      .text('New Title');
    
  </script>
</body>
