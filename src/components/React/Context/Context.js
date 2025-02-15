import React from 'react';

const Context = () => {
  return (
    <div>
      <h1>React Context</h1>
      <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
      <h2>Creating a Context</h2>
      <pre>
        <code>
          {`const MyContext = React.createContext(defaultValue);`}
        </code>
      </pre>
      <h2>Providing a Context</h2>
      <pre>
        <code>
          {`class App extends React.Component {
  render() {
    return (
      <MyContext.Provider value={/* some value */}>
        <Toolbar />
      </MyContext.Provider>
    );
  }
}`}
        </code>
      </pre>
      <h2>Consuming a Context</h2>
      <pre>
        <code>
          {`class Toolbar extends React.Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {value => /* render something based on the context value */}
        </MyContext.Consumer>
      </div>
    );
  }
}`}
        </code>
      </pre>
    </div>
  );
};

export default Context;