import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [count, setCount] = React.useState(0)
  return (
    <div className="App">
      <header className="App-header">

        <h1>{count}</h1>
        <button
          onClick={() => setCount(count + 1)}

        >Plus</button>

      </header>
    </div>
  );
}

export default App;
