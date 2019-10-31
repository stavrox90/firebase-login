import React, { Component } from 'react';
import fire from '../config/Fire';
import '../styles/home.css';

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
      <div className="home">
        <div className="box">
          <h1 style={{ fontWeight: "bold" }}>You are now logged in!</h1>
          <h4>Hello there!</h4>
          <p>I made this app without email and password validation to save the tester the inconveniences from thinking on dummy email and passwords.</p>
          <p>I will progressively upgrade this web app as I developed my skills further, logic-wise and design-wise.</p>
          <p>Have a nice day!</p>
          <div className="logout">
            <button onClick={this.logout}>Logout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
