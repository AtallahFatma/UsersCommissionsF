import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Button} from 'react-bootstrap'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getProfile} from "../redux/actions";

class LoginForm extends Component {

    render() {
        const { fetching, getProfile, error } = this.props;
        return (
            <Form>
                <h1>Login</h1>
                <Form.Group controlId="formBasicEmailLogin">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                {fetching ? (
                    <Button variant="primary" disabled>Fetching...</Button>
                ) : (
                    <Button variant="primary" type="submit" onClick={getProfile}>
                        Submit
                    </Button>
                )}
                {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}

            </Form>
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

export default (connect(mapStateToProps, mapDispatchToProps)(LoginForm));
