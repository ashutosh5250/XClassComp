import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }
  incrementCount() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  decrementCount() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }
  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.incrementCount()}>Increment</button>
        <button onClick={() => this.decrementCount()}>Decrement</button>
      </div>
    );
  }
}

export default App;
