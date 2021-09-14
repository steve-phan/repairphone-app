import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './routes';

function App() {
  const content = useRoutes(routes);
  console.log(content);
  return <div className='App'>{content}</div>;
}

export default App;
