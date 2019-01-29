import React, { Component } from 'react';
import {Router, withRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";

// Import actions
import {getProfile} from './redux/actions';

// Import components
import LoginForm from './components/loginForm'

class App extends Component {
  render() {
      const { fetching, getProfile, error } = this.props;

      return (
          <div className="App">
             {/* <Router>
                  <Switch>
                      <Route exact path={'/'} rel="alternate" hrefLang="x"
                             component= {<LoginForm />}
                      />
                </Switch>
              </Router>*/}

              {fetching ? (
                  <button disabled>Fetching...</button>
              ) : (
                  <button onClick={getProfile}>Get a user</button>
              )}

              {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}

          </div>
      );
  }
}

const mapStateToProps = state => {
    return {
        fetching: state.fetching,
        error: state.error,
        user: state.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProfile: bindActionCreators(getProfile, dispatch),
    };
};

export default (connect(mapStateToProps, mapDispatchToProps)(App));
