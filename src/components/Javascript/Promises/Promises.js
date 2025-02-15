import React from 'react';

const Promises = () => {
  return (
    <div>
      <h1>JavaScript Promises</h1>
      <p>Promises in JavaScript are used to handle asynchronous operations. They represent a value that may be available now, or in the future, or never.</p>
      <h2>Creating a Promise</h2>
      <pre>
        <code>
          {`const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve('Promise resolved successfully!');
  } else {
    reject('Promise rejected.');
  }
});`}
        </code>
      </pre>
      <h2>Using Promises</h2>
      <pre>
        <code>
          {`promise
  .then(result => {
    console.log(result); // Promise resolved successfully!
  })
  .catch(error => {
    console.error(error);
  });`}
        </code>
      </pre>
      <h2>Chaining Promises</h2>
      <pre>
        <code>
          {`const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 2000);
  });
};

fetchData()
  .then(data => {
    console.log(data); // Data fetched
    return 'Processing data';
  })
  .then(processedData => {
    console.log(processedData); // Processing data
  });`}
        </code>
      </pre>
    </div>
  );
};

export default Promises;