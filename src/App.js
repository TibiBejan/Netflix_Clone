import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route exact path='/register'>
            <SignIn />
          </Route>
          <Route exact path='/login'>
            <LogIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
