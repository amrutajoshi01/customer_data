import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Register from './components/Register';
import Upload from './components/Upload';
import Menu from './components/Menu';
function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header"><Menu /></header>
        <Register />
      </Router>
    </div>
  );
}

export default App;
