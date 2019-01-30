import React, {Component} from 'react';
import {Form, Button, Col} from 'react-bootstrap'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addUser} from "../redux/actions/userActions";

class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email:'',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(event) {
        this.props.addUser(this.state)
        event.preventDefault();
    }

    render() {
        const { registerFailure, addingUser } = this.props;

        return (
            <Form onSubmit={this.handleSubmit}>
                <h1>Register</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                                  placeholder="Your name"
                                  name="name"
                                  value={this.state.name}
                                  onChange={this.handleChange}/>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"
                                      placeholder="Enter email"
                                      name="email"
                                      value={this.state.email}
                                      onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                                      placeholder="Password"
                                      name="password"
                                      value={this.state.password}
                                      onChange={this.handleChange}/>
                    </Form.Group>
                </Form.Row>

                {addingUser ? (
                    <Button variant="primary" disabled>Adding User...</Button>
                ) : (
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                )}
                {registerFailure && <p style={{ color: "red" }}>It seems like there is an issue with the API</p>}
            </Form>
        );
    }
}

const mapStateToProps = state => {
    return {
        registerFailure: state.registerFailure,
        addingUser: state.addingUser,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addUser: bindActionCreators(addUser, dispatch),
    };
};

export default (connect(mapStateToProps, mapDispatchToProps)(RegisterForm));
