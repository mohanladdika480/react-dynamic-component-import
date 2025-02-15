import React from "react";

const JSX = () => {
  return (
    <div>
      <h1>JSX in React</h1>
      <p>
        JSX stands for JavaScript XML. It allows us to write HTML in React. JSX
        makes it easier to write and add HTML in React.
      </p>
      <h2>Example of JSX</h2>
      <pre>
        <code>{`const element = <h1>Hello, world!</h1>;`}</code>
      </pre>
      <h2>Embedding Expressions in JSX</h2>
      <pre>
        <code>
          {`const name = 'John';
const element = <h1>Hello, {name}!</h1>;`}
        </code>
      </pre>
      <h2>JSX is an Expression Too</h2>
      <pre>
        <code>
          {`function getGreeting(user) {
  if (user) {
    return <h1>Hello, {user}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}`}
        </code>
      </pre>
    </div>
  );
};

export default JSX;
