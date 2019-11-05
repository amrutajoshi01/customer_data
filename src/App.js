import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Register from './components/Register';
import Upload from './components/Upload';
import Menu from './components/Menu';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header"><Menu /></header>
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/upload">
            <Upload />
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
