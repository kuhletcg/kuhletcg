---
Layout: post
Title: Add  inline styling to elements
Date: 2021-04-29
---

## Add Inline Styling to ElementsPassed

D3 lets you add inline CSS styles on dynamic elements with the style() method.

The style() method takes a comma-separated key-value pair as an argument. Here's an example to set the selection's text color to blue:

selection.style("color","blue");
Add the style() method to the code in the editor to make all the displayed text have a font-family of verdana.

## Solution

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      
      .style('font-family', 'verdana')
      
  </script>
</body>
