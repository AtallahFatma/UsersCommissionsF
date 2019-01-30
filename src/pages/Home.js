import React, {Component} from 'react';
import Login from './LoginForm'
import Register from './RegisterForm'

import {Container, Row, Col} from 'react-bootstrap'
class Home extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col> <Login /> </Col>
                    <Col> <Register /> </Col>
                </Row>
            </Container>

        );
    }
}

export default Home;
