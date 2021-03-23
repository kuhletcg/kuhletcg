---
Layout: post
Title: Handling multiple inputs
Date: 2021-03-23
---

# Introduction

When creating a form with React components, it is common to use an onChange handler to listen for changes to input elements and record their values in the state. Besides handling just one input, a single onChange handler can be set up to handle many different inputs in the form.

# Body

## A Single Input

The onChange handler will listen for any change to the input and fire an event when the value changes. With a text input field like this, we can pass the onChange prop:

- <label>
- First name
- <input
- type="text"
- onChange={handleChange}
- />
- </label>

The value of the prop is the handle change function; It is an event handler. The event that the handler receives as a parameter is an object that contains a target field. This target is the DOM element that the event handler is bound to (ie, the text input field). By accessing this field, we can determine what the target's value is changed to:

- function handle change(event) {
- console.log("new value", event.target.value);
- }

## A Controlled Component

But this change handler, so far, is rather useless. Instead, we can imagine that the change handler should listen for changes and save the new changes in the internal state for later form submission.

In order to accomplish this, it is common to set up the input field as a controlled component, meaning that React state drives its value in the UI. To do this, we'll add some React state and set the input field's value prop with it:

There are a couple of significant changes that have been made, in addition to the new input field. A new lastName string has been added to the state to store the data from this input, and each of the input element has a new name prop. These name props will show up in the DOM as name attributes on the input HTML elements. We'll consume them in an adjustment to the handler code:

- function handle change(event) {
- const value = event.target.value;
- setState({
- ...state,
- [event.target.name]: value
- });
- }

## Radio Inputs

The <input type="radio" /> functions a little differently than other inputs. Its value prop is static, representing the option to select. The name is duplicated and must match across the radio buttons that make up the radio button group. The checked prop is introduced with a condition that determines whether that particular button is shown as active or not.

## A Controlled Component

But this change handler, so far, is rather useless. Instead, we can imagine that the change handler should listen for changes and save the new changes in internal state for later form submission.

# Conclusion

Now I have a knowledge of how to consume multiple inputs and the small differences between the common form fields that exist. I also know how to watch for changes across each of these input types and consume them in a single onChange handler.

To handle this efficiently, we define each input with a name prop. This matches a corresponding field in React state. In order to update that state, we use the change event’s event. target.name field.
