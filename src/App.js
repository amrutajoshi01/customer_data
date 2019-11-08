import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Register from './containers/Register';
import Upload from './containers/Upload';
import Menu from './containers/Menu';
import Login from './containers/Login';
import Customers from './containers/Customers';
function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <header className="App-header"><Menu /></header>
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/upload">
            <Upload />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/customers">
            <Customers />
          </Route>
        </Switch>
      {/* </Router> */}
    </div>
  );
}

export default App;
