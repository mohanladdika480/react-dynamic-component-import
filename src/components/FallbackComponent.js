import React from 'react';

const FallbackComponent = ({ hash }) => {
  return (
    <div>
      <h1>Component Not Found</h1>
      <p>No component found for the hash: <b><code>{hash}</code></b></p>
    </div>
  );
};

export default FallbackComponent;