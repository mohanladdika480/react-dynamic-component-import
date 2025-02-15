import React from 'react';

const Functions = () => {
  return (
    <div>
      <h1>JavaScript Functions</h1>
      <section>
        <h2>1. Function Declaration</h2>
        <pre>
          {`function greet() {
  console.log('Hello, World!');
}`}
        </pre>
        <p>This is the most common way to define a function. It is hoisted, meaning it can be called before it is defined.</p>
      </section>

      <section>
        <h2>2. Function Expression</h2>
        <pre>
          {`const greet = function() {
  console.log('Hello, World!');
};`}
        </pre>
        <p>This function is defined as part of a variable assignment. It is not hoisted.</p>
      </section>

      <section>
        <h2>3. Arrow Function</h2>
        <pre>
          {`const greet = () => {
  console.log('Hello, World!');
};`}
        </pre>
        <p>Arrow functions provide a shorter syntax and do not have their own 'this' context.</p>
      </section>

      <section>
        <h2>4. Immediately Invoked Function Expression (IIFE)</h2>
        <pre>
          {`(function() {
  console.log('Hello, World!');
})();`}
        </pre>
        <p>This function is executed immediately after it is defined.</p>
      </section>

      <section>
        <h2>5. Generator Function</h2>
        <pre>
          {`function* generator() {
  yield 'Hello';
  yield 'World';
}`}
        </pre>
        <p>Generator functions can pause execution and resume at a later point.</p>
      </section>
    </div>
  );
};

export default Functions;