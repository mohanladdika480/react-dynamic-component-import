import React from 'react';

const StateAndLifecycle = () => {
  return (
    <div>
      <h1>State and Lifecycle in React</h1>
      <p>State is a built-in object that stores property values that belong to a component. When the state object changes, the component re-renders.</p>
      <h2>Adding State to a Class</h2>
      <pre>
        <code>
          {`class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}`}
        </code>
      </pre>
    </div>
  );
};

export default StateAndLifecycle;