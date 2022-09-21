import './App.css';
import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  async componentDidMount() {
    this.setState({
      loading: true
    });
    const response = await axios.get('https://api.github.com/users')
    this.setState({
      loading: false,
      users: response.data
    })
  }

  render() {
    return (
      <div className='App'>
        <Navbar title='Git Finder' icon='fab fa-github' />
        <div className='container'>
          <Search/>
          <Users userData={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;