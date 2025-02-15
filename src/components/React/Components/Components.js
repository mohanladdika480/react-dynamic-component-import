import React from 'react';

const Components = () => {
  return (
    <div>
      <h1>React Components</h1>
      <p>Components are the building blocks of a React application. They describe a part of the user interface.</p>
      <h2>Function Components</h2>
      <pre>
        <code>
          {`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`}
        </code>
      </pre>
      <h2>Class Components</h2>
      <pre>
        <code>
          {`class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`}
        </code>
      </pre>
      <h2>Rendering a Component</h2>
      <pre>
        <code>
          {`const element = <Welcome name="Sara" />;
ReactDOM.render(element, document.getElementById('root'));`}
        </code>
      </pre>
    </div>
  );
};

export default Components;