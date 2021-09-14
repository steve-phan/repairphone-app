import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './routes';

function App() {
  const content = useRoutes(routes);
  return <>{content}</>;
}

export default App;
