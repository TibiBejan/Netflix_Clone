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
          <Route exact path='/' component={Homepage} />
          <Route path='/register' component={SignIn} />
          <Route path='/login' component={LogIn} />
          <Route path='/series' component={Series} />
          <Route path='/movies' component={Movies} />
          <Route path='/kids' component={Kids} />
          <Route path='/discover' component={Discover} />
          <Route path='/browse/:name' component={SeriesOrMovie} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
