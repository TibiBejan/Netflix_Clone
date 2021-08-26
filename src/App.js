import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Kids from './pages/Kids';
import SeriesOrMovie from './pages/SeriesOrMovie';
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
          <Route exact path='/movies'>
            <Movies />
          </Route>
          <Route path='/kids'>
            <Kids />
          </Route>
          <Route path='/discover'>
            <Discover />
          </Route>
          <Route path='/browse/:name'>
            <SeriesOrMovie />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
