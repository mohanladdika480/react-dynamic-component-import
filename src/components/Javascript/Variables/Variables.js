import React from 'react';

const Variables = () => {
  return (
    <div>
      <h1>JavaScript Variables</h1>
      <p>JavaScript has three types of variables: <code>var</code>, <code>let</code>, and <code>const</code>.</p>
      <table border="1">
        <thead>
          <tr>
            <th>Type</th>
            <th>Scope</th>
            <th>Hoisting</th>
            <th>Reassignable</th>
            <th>Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>var</code></td>
            <td>Function</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Use <code>var</code> if you need to support older browsers.</td>
          </tr>
          <tr>
            <td><code>let</code></td>
            <td>Block</td>
            <td>No</td>
            <td>Yes</td>
            <td>Use <code>let</code> for variables that will be reassigned.</td>
          </tr>
          <tr>
            <td><code>const</code></td>
            <td>Block</td>
            <td>No</td>
            <td>No</td>
            <td>Use <code>const</code> for variables that will not be reassigned.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Variables;