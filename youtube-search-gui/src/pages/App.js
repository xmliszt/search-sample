import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../css/App.css';
import Home from './Home';
import Results from './Results';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/results" component={Results} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
