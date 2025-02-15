import React from 'react';

const Hooks = () => {
  return (
    <div>
      <h1>React Hooks</h1>
      <p>Hooks are functions that let you use state and other React features without writing a class.</p>
      <h2>useState Hook</h2>
      <pre>
        <code>
          {`import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}
        </code>
      </pre>
      <h2>useEffect Hook</h2>
      <pre>
        <code>
          {`import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}
        </code>
      </pre>
    </div>
  );
};

export default Hooks;