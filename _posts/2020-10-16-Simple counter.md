---
Layout: post
Title: Simple counter
Date: 2020-10-16
---

   # Simple Counter

 ## Description

 You can design a more complex stateful component by combining the concepts covered so far. These include initializing state, writing methods that set state and assigning click handlers to trigger these methods.

The Counter component keeps track of a count value in the state. Two buttons call methods increment() and decrement(). Write these methods so the counter value is incremented or decremented by 1 when the appropriate button is clicked. Also, create a reset() method so when the reset button is clicked, the count is set to 0.


 ## Challenges

The challenges that I faced is that I didn't know where to start because I haven't done
counter before,I was clueless about it. So I had to go to youtube and check the tutorial, at least know I understand something about react.

 ## Solution

 class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
 this.increment = this.increment.bind(this);
  this.decrement = this.decrement.bind(this);
  this.reset = this.reset.bind(this);
 }
  reset() {
    this.setState({
      count: 0
    });
  }
  increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }   