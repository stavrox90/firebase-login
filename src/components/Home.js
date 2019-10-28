import React, { Component } from 'react';
import fire from '../config/Fire';

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>You are logged in!</h1>
          <p>Welcome {this.state.username}</p>
          <div className="logout">
            <button onClick={this.logout}>Logout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
