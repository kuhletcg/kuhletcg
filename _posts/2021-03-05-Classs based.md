---
Layout: post
Title: Class based
Date: 2021-03-05
---

# Is Java class-based?

Class-based object-oriented languages, such as Java and C++, are founded on the concept of two distinct entities: classes and instances. ... A class is abstract rather than any particular member in a set of objects it describes.

# WHAT IS A CLASS?

A class is a specification (think of it as a blueprint or pattern and a set of instructions) of how to provide some service. Like a blueprint or a pattern, a Java class has exact specifications. The specification is the class' contract. I've talked about contracts before. First, back when I introduced Adding Commands in Logo and again when we learned about Defining Operators when we specified a contract for a Grid Toolkit.

Engineers and construction and factory workers use blueprints to build cars, buildings, bridges, virtually anything. Tailors, seamsters, printers use patterns to make the clothes we wear, books we read. Chefs follow recipes to put together meals.

Start by thinking of a class as an object. Imagine a class as a container, like that glass or plastic bottle you drink your favorite beverage from. Even something this simple has specifications - it has a size. It can only hold so much. A beverage company puts something in it. You take it out. It's used for storing something. More commonly, classes can store things and do things. Think about a modern digital camera as an object. You take pictures with it - it captures images and stores them. They also let you do things with the stored images, like cropping and stitching. Both of these objects, a bottle, and a camera, can be represented as classes.

You construct a class by writing what looks a lot like an outline. There are rules that you must follow to write this outline in the Java language, many of them and are unambiguous. In computer programming, these rules are called the language's syntax.

The logo had its own syntax. Its syntax is pretty simple, which is one reason I chose to expose you to it before Java. Java has a much more complex syntax. The rest of this lesson will cover the rules for writing a syntactically correct Java class.

Why is this important? If you follow these rules, the Java compiler will not spit out a bunch of errors. Life will be good. Trust me...

A CLASS CONSISTS OF...
Here is a breakdown of the source code representation of a Java class. A class can be broken down into two things:

The first piece is a class-header that consists of the keyword "class" and the name you give to the class. Names in programming languages are also known as identifiers.
The second piece is the body. It consists of a pair of open/close squiggly brackets with stuff in between them.

# Class basic syntax

In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods).

Wikipedia
In practice, we often need to create many objects of the same kind, like users, or goods or whatever.

As we already know from the chapter Constructor, operator "new", new function can help with that.

But in modern JavaScript, there’s a more advanced “class” construct, that introduces great new features which are useful for object-oriented programming.

# The “class” syntax example

class MyClass {
// class methods
constructor() { ... }
method1() { ... }
method2() { ... }
method3() { ... }
...
}

# Example 2

class User {

constructor(name) {
this.name = name;
}

sayHi() {
alert(this.name);
}

}

// Usage:
let user = new User("John");
user.sayHi();
