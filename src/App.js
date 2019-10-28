import React, { Component } from 'react';
import fire from './config/Fire';
import Login from './components/Login';
import Home from './components/Home';
import FirebaseLogo from './components/svg/firebaseLogo';
import ReactLogo from './components/svg/reactLogo';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    this.authListeneer();
  }

  authListeneer() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div>
        <div className="logo">
          <FirebaseLogo />
          <ReactLogo />
        </div>
        {this.state.user ? <Home /> : <Login />}
      </div>
    );
  }
}

export default App;