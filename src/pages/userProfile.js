import React, {Component} from 'react';
import {Table} from 'react-bootstrap'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getProfile} from "../redux/actions/userActions";
import { Redirect } from 'react-router'

class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.props.getProfile(this.props.userId)
    }

    render() {
        const { user } = this.props;
        
        return (
            <div>
                {!this.props.userId && <Redirect to='/' />}
                <h1> User Profile </h1>
                { user &&
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Last login</th>
                            <th>Commissions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.last_login['date']}</td>
                            <td>{user.commissions}</td>
                        </tr>
                        </tbody>
                    </Table>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        userId: state.userId,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProfile: bindActionCreators(getProfile, dispatch),
    };
};

export default (connect(mapStateToProps, mapDispatchToProps)(UserProfile));
