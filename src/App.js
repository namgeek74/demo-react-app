import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { store } from './redux/store';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
      userInfo: {},
    };
  }

  recieveUserInfo = (info) => {
    console.log(info);
    this.setState({ user: info });
    this.setState({ isLogin: true });
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <nav className="navbar navbar-light">
            <div className="container">
              <Link className="navbar-brand" to="/">
                Social Blog App
              </Link>
              <ul className="nav navbar-nav pull-xs-right">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                {this.state.isLogin && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/editor">
                      <i className="ion-compose"></i>&nbsp;New Article
                    </Link>
                  </li>
                )}
                {this.state.isLogin && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/setting">
                      <i className="ion-gear-a"></i>&nbsp;Settings
                    </Link>
                  </li>
                )}
                {!this.state.isLogin && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Sign in
                    </Link>
                  </li>
                )}
                {!this.state.isLogin && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Sign up
                    </Link>
                  </li>
                )}
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </li> */}
              </ul>
            </div>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login" component={SignIn} />
            {/* <SignIn sendLoginInfo={this.recieveUserInfo} /> */}
            {/* </Route> */}
            <Route path="/register">
              <SignUp />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}
