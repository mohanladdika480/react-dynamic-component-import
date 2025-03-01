import React from 'react';
import Concepts from '../Concepts/Concepts';

const ReactConcepts = () => {
  const concepts = [
    { name: 'Core React', link: 'React_CoreReact' },
    { name: 'Component Lifecycle and Hooks', link: 'React_LifecycleAndHooks' },
    { name: 'State and Lifecycle', link: 'React_StateAndLifecycle' },
    { name: 'Hooks', link: 'React_Hooks' },
    { name: 'Context', link: 'React_Contex' },
  ];

  return <Concepts title="React Concepts" concepts={concepts} />;
};

export default ReactConcepts;