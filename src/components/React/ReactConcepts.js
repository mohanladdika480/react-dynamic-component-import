import React from 'react';
import Concepts from '../Concepts/Concepts';

const ReactConcepts = () => {
  const concepts = [
    { name: 'JSX', link: 'React_JSX' },
    { name: 'Components', link: 'React_Components' },
    { name: 'State and Lifecycle', link: 'React_StateAndLifecycle' },
    { name: 'Hooks', link: 'React_Hooks' },
    { name: 'Context', link: 'React_Contex' },
  ];

  return <Concepts title="React Concepts" concepts={concepts} />;
};

export default ReactConcepts;