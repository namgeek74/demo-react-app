import React from 'react';
import { Link } from 'react-router-dom';

export default class SignUp extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      password: '',
    };
  }

  changeUserName = (e) => {
    this.setState({ userName: e.target.value });
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  signUp = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign up</h1>
              <p className="text-xs-center">
                <Link to="/login">Have an account?</Link>
              </p>
              <form>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Your Name"
                    value={this.state.userName}
                    onChange={this.changeUserName}
                  />
                </fieldset>
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
                  className="btn btn-lg btn-primary pull-xs-right"
                  onClick={this.signUp}
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
