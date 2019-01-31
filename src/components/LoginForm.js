import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {userLogin} from "../redux/actions/userActions";
import { Redirect } from 'react-router'
import PropTypes from 'prop-types';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleLogin(event) {
        this.props.userLogin(this.state);
        event.preventDefault();
    }
    render() {
        const { loggingIn, loginFailure, loginSuccess} = this.props;
        return (
            <Form onSubmit={this.handleLogin}>
                <h1>Login</h1>
                <Form.Group controlId="formBasicEmailLogin">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                                  placeholder="Enter email"
                                  name="email"
                                  value={this.state.email}
                                  onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                                  placeholder="Password"
                                  name="password"
                                  value={this.state.password}
                                  onChange={this.handleChange} />
                </Form.Group>

                {loggingIn ? (
                    <Button variant="primary" disabled>Fetching...</Button>
                ) : (
                    <Button variant="primary" type="submit">
                        Log in
                    </Button>
                )}
                {loginFailure && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
                {loginSuccess &&  <Redirect to='user' />}
            </Form>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggingIn: state.loggingIn,
        loginFailure: state.loginFailure,
        loginSuccess: state.loginSuccess,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        userLogin: bindActionCreators(userLogin, dispatch),
    };
};

LoginForm.propTypes = {
    userLogin: PropTypes.func,
    loginFailure: PropTypes.bool,
    loggingIn: PropTypes.bool,
    loginSuccess: PropTypes.bool,
};

export default (connect(mapStateToProps, mapDispatchToProps)(LoginForm));
