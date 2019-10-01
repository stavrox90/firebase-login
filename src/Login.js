import React, {Component} from 'react';
import fire from './config/Fire';

class Login extends Component {
  constructor (props) {
    super (props);
    this.login = this.login.bind (this);
    this.handleChange = this.handleChange.bind (this);
    this.signup = this.signup.bind (this);
    this.state = {
      email: '',
      password: '',
    };
  }

  login (e) {
    e.preventDefault ();
    fire
      .auth ()
      .signInWithEmailAndPassword (this.state.email, this.state.password)
      .catch (error => {
        console.log (error);
      });
  }

  handleChange (e) {
    this.setState ({[e.target.name]: e.target.value});
  }

  signup (e) {
    e.preventDefault ();
    fire
      .auth ()
      .createUserWithEmailAndPassword (this.state.email, this.state.password)
      .catch (error => {
        console.log (error);
      });
  }

  render () {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Welcome to Firelog</h1>
          <form>
            <div className="email">
              <label for="exampleInputEmail1">Email address</label>
              <input
                value={this.state.email}
                onChange={this.handleChange}
                type="email"
                name="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="password">
              <label for="exampleInputPassword1">Password</label>
              <input
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                name="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="login">
              <button
                type="submit"
                onClick={this.login}
                class="btn btn-primary"
              >
                Login
              </button>
            </div>
            <div className="signup">
              <button onClick={this.signup} className="btn btn-success">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
