import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


class LoginForm extends Component {
    constructor(props) {
        super(props);
    }


    submit(e) {
        e.preventDefault();
        if (this.isFormValid()) {
            this.props.userActions.connect(this.state.email, this.state.password, this.props.recaptchaResponse);
        }
    }

    renderSubmitButton() {
        return (
            <button type="submit" className="">
                <div className="">Log IN</div>
            </button>
        );
    }


    render() {
        return (
            <form id="form-login" onSubmit={(e) => this.submit(e)}>
                <header className="title-login">Login</header>
                <div className="content-card-footer-adjustable">
                    <div className="row center-xs">
                        <div className="col-xs-11 col-sm-8">
                            <div className="input-icon">
                                <input name="mail" id="login_email" type="text"
                                       placeholder="login"
                                       onChange={e => this.onFieldChange('email', e)}
                                       className={(this.state.email !== '' && this.state.email !== null && typeof this.state.email !==
                                           'undefined') ? 'notEmpty' : 'empty'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row center-xs">
                        <div className="col-xs-11 col-sm-8">
                            <div className="input-icon">
                                <input
                                    id="login_password"
                                    name="password"
                                    type="password"
                                    onChange={e => this.onFieldChange('password', e)}
                                    placeholder="password"
                                    className={(this.state.password !== '' && this.state.password !== null && typeof this.state.password !==
                                        'undefined') ? 'notEmpty' : 'empty'}/>
                            </div>
                        </div>
                    </div>
                    {/* RECAPTCHA */}
                </div>
                <footer>
                    {/* SUBMIT BUTTON */}
                    {this.renderSubmitButton()}
                </footer>
            </form>
        );
    }
}

export default LoginForm;
