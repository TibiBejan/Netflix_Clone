import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Kids from './pages/Kids';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route path='/register'>
            <SignIn />
          </Route>
          <Route path='/login'>
            <LogIn />
          </Route>
          <Route path='/series'>
            <Series />
          </Route>
          <Route path='/movies'>
            <Movies />
          </Route>
          <Route path='/kids'>
            <Kids />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
