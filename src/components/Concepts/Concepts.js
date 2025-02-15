import React from 'react';
import './Concepts.scss';

const Concepts = ({ title, concepts }) => {
  return (
    <div className="concepts-container">
      <h1>{title}</h1>
      <ol className="concepts-list">
        {concepts.map((concept, index) => (
          <li key={index} className="concept-item">
            <a href={`#${concept.link}`}>
              {concept.name}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Concepts;