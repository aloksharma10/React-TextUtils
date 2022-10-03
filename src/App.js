import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Alerts from './components/Alerts';
import TextUtils from './components/TextUtils';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const [mode, setMode] = useState('light')
  const toggleMode = (cls) => {
    
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enable", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enable", "success")
    }
  }

  setTimeout(() => {
    setAlert(null);
  }, 3000);

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} title='Alok' />

        <Alerts alert={alert} />
        <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
            <TextUtils mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
