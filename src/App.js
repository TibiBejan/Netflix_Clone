import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';
import Movies from './pages/Movies';
import Movie from './pages/Movie';
import Series from './pages/Series';
import TvShow from './pages/TvShow';
import Kids from './pages/Kids';
import Discover from './pages/Discover';

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
          <Route exact path='/series'>
            <Series />
          </Route>
          <Route path='/series/:id'>
            <TvShow />
          </Route>
          <Route exact path='/movies'>
            <Movies />
          </Route>
          <Route path='/movies/:id'>
            <Movie />
          </Route>
          <Route path='/kids'>
            <Kids />
          </Route>
          <Route path='/discover'>
            <Discover />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
