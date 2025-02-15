import React from 'react';

const Objects = () => {
  return (
    <div>
      <h1>JavaScript Objects</h1>
      <p>Objects in JavaScript are collections of key-value pairs. Each key is a string (or Symbol) and the value can be any type of data, including other objects.</p>
      <h2>Creating an Object</h2>
      <pre>
        <code>
          {`const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['reading', 'traveling'],
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY'
  }
};`}
        </code>
      </pre>
      <h2>Accessing Object Properties</h2>
      <pre>
        <code>
          {`console.log(person.firstName); // John
console.log(person['lastName']); // Doe`}
        </code>
      </pre>
      <h2>Modifying Object Properties</h2>
      <pre>
        <code>
          {`person.age = 31;
person['hobbies'].push('cooking');`}
        </code>
      </pre>
    </div>
  );
};

export default Objects;