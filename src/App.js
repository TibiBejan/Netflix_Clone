import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';
import TvShows from './pages/TvShows';
import Movies from './pages/Movies';

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
          <Route path='/tv-shows'>
            <TvShows />
          </Route>
          <Route path='/movies'>
            <Movies />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
