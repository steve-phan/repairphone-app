import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './components/account/SignIn';
import SignUp from './components/account/SignUp';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className='App'>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/signup'>SignUp</Link>
              </li>
              <li>
                <Link to='/signin'>SignIn</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path='/signup'>
              <SignUp />
            </Route>
            <Route path='/signin'>
              <SignIn />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
