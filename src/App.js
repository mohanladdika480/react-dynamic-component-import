import React from 'react';
import './App.scss';
import Menu from './components/Menu/Menu';
import DynamicComponentLoader from './components/DynamicComponentLoader';

function App() {

  return (
    <div className="app">
      <Menu />
      <div className="app-content">
        <DynamicComponentLoader />
      </div>
    </div>
  );
}

export default App;
