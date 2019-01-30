import React, {Component} from 'react';
import {Table} from 'react-bootstrap'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getProfile, getCommissions} from "../redux/actions/userActions";
import { Redirect } from 'react-router'
import {map} from 'lodash';

class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.props.getProfile(this.props.userId);
        this.props.getCommissions(this.props.userId);
    }

    render() {
        const { user, commissions } = this.props;
        
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
                {
                    commissions &&
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Cashback</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            Object.keys(commissions).map((key, index) => {
                                return (
                                    <tr key={index}>
                                        {map(commissions[key], function(elem, index) {
                                            return (
                                                <th key={index}>
                                                    {elem}
                                                </th>);
                                        })}
                                    </tr>
                                );
                            })
                        }
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
        commissions: state.commissions,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProfile: bindActionCreators(getProfile, dispatch),
        getCommissions: bindActionCreators(getCommissions, dispatch),
    };
};

export default (connect(mapStateToProps, mapDispatchToProps)(UserProfile));
