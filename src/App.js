import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import GithubState from './contexts/github/GithubState';
import AlertState from './contexts/alert/AlertState';
import Home from './components/pages/Home';

class App extends Component {

  /**
   * Renders App component (lifecycle method)
   * @returns 
   */
  render() {
    return (
      <GithubState>
        <AlertState>
          <Router>
            <div className='App'>
              <Navbar title='Git Finder' icon='fab fa-github' />
              <div className='container'>
                <Alert/>
                <Routes>
                  <Route exact path='/' element={<Home />}>
                  </Route>
                  <Route path='/about' element={<About/>}>
                  </Route>
                </Routes>
              </div>
            </div>
          </Router>
       </AlertState>
      </GithubState>
    );
  }
}
export default App;