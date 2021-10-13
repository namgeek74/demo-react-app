import React from 'react';
import { Link } from 'react-router-dom';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  signIn = () => {
    console.log(this.state);
    fetch('https://conduit.productionready.io/api/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password,
        },
      }),
    })
      .then((res) => res.json())
      .then(
        (res) => {
          console.log(res);
        },
        (err) => {
          alert(err);
        }
      );
  };

  render() {
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign up</h1>
              <p className="text-xs-center">
                <Link to="/register">Need an account?</Link>
              </p>
              <form>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.changeEmail}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.changePassword}
                  />
                </fieldset>
                <button
                  type="button"
                  className="btn btn-lg btn-primary pull-xs-right"
                  onClick={this.signIn}
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
