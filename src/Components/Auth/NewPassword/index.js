import React from 'react';
import './NewPassword.scss';
import { NavLink } from 'react-router-dom';
import { StartButton } from '../../';

export default class NewPassword extends React.Component {
    render() {
        return (
            <div className="newpassword-component">
                <h1>The new password was sent to your email</h1>
                <div className="action-area">
                    <div className="sign-up">
                        Haven’t an account? <NavLink to="/sign-up">Sign Up</NavLink>
                    </div>
                    <NavLink to="/" className="show-web"><StartButton className="start-btn" height="65px" startText="Continue"/></NavLink>
                    <NavLink to="/" className="show-mobile"><StartButton className="start-btn" height="50px" startText="Continue"/></NavLink>
                </div>
            </div>
        );
    }
}
