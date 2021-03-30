---
Layout: post
Title: Ways to access objects properties in javaScript
Date: 2021-03-30
---

# Three ways to access objects properties in javaScript

## Dot property accessor

A common way to access the property of an object is the dot property accessor syntax:

expression. identifier
expression should evaluate to an object, and the identifier is the name of the property you’d like to access.

For example, let’s access the p Conclusion
JavaScript provides a bunch of good ways to access object properties.

The dot property accessor syntax object. property works nicely when you know the variable ahead of time.

When the property name is dynamic or is not a valid identifier, a better alternative is square brackets property accessor: object[propertyName].

The object destructuring extracts the property directly into a variable: { property } = object. Moreover, you can extract the dynamic property names (determined at runtime): { [propertName]: variable } = object.

There are no good or bad ways to access properties. Choose depending on your particular situation. property name of the object hero:

const hero = {
name: 'Batman'
};

// Dot property accessor
hero.name; // => 'Batman'

## Square brackets property accessor

The square brackets property accessor has the following syntax:

expression[expression]
The first expression should evaluate an object and the second expression should evaluate a string denoting the property name.

## Object destructuring

The basic object destructuring syntax is pretty simple:

const { identifier } = expression;
the identifier is the name of the property to access and expression should evaluate to an object. After the destructuring, the variable identifier contains the property value.

# Conclusion

JavaScript provides a bunch of good ways to access object properties.

The dot property accessor syntax object. property works nicely when you know the variable ahead of time.

When the property name is dynamic or is not a valid identifier, a better alternative is square brackets property accessor: object[propertyName].

The object destructuring extracts the property directly into a variable: { property } = object. Moreover, you can extract the dynamic property names (determined at runtime): { [propertName]: variable } = object.

There are no good or bad ways to access properties. Choose depending on your particular situation.
