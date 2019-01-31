import React, {Component} from 'react';
import Login from '../components/LoginForm'
import Register from '../components/RegisterForm'

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
