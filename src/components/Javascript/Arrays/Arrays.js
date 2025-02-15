import React from 'react';

const Arrays = () => {
  return (
    <div>
      <h1>JavaScript Arrays</h1>
      <p>Arrays in JavaScript are used to store multiple values in a single variable. They are a special type of object and can hold any type of data.</p>
      <h2>Creating an Array</h2>
      <pre>
        <code>
          {`const fruits = ['apple', 'banana', 'cherry'];`}
        </code>
      </pre>
      <h2>Accessing Array Elements</h2>
      <pre>
        <code>
          {`console.log(fruits[0]); // apple
console.log(fruits[1]); // banana`}
        </code>
      </pre>
      <h2>Modifying Array Elements</h2>
      <pre>
        <code>
          {`fruits[2] = 'orange';
fruits.push('grape');`}
        </code>
      </pre>
      <h2>Array Methods</h2>
      <pre>
        <code>
          {`const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]`}
        </code>
      </pre>
    </div>
  );
};

export default Arrays;