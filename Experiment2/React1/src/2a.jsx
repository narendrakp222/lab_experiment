import React, { Component } from "react";
class Counter extends Component {
 constructor() {
 super();
 this.state = {
 count: 0
 };
 }
 increment = () => {
 this.setState({ count: this.state.count + 1 });
 };
 render() {
 return (
 <div>
 <h2>React Class Component Counter</h2>
 <h3>Count: {this.state.count}</h3>
 <button onClick={this.increment}>Increment</button>
 </div>
 );
 }
}
export default Counter;
