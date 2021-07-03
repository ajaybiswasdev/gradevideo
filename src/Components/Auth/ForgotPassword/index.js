import React from "react";
import "./ForgotPassword.scss";
import email from "../../../Assets/Common/email.svg";
import { NavLink } from "react-router-dom";
import { StartButton } from "../../";
import { ReactSVG } from "react-svg";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { forgotPasswordAction } from "../../../Redux/Actions";
import {toast} from 'react-toastify';

class ForgotPassword extends React.Component {
  state = {
    email: "",
  };

  doforgotPassword = () => {
    const { email } = this.state;
    this.props.forgotPasswordAction(email).then(()=>{
      const {forgotPassword, forgotPasswordErr} = this.props;
      console.log("=====forgotPassword=========", forgotPassword)
      if(forgotPassword){
        toast(forgotPassword.message);
        this.props.history.push("/new-password");
      } else {
        toast(forgotPasswordErr);
      };
    })
  };

  render() {
    const { email } = this.state;
    return (
      <div className="forgot-component">
        <h1>Forgot Password</h1>
        <div className="input-group custom-input">
          <div className="input-group-prepend">
            <span className="input-group-text">
              {" "}
              <ReactSVG src={email} className="input-icon" />{" "}
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Type Your E-mail"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <div className="action-area">
          <div className="sign-up">
            Haven’t an account? <NavLink to="/sign-up">Sign Up</NavLink>
          </div>
          {/* <NavLink to="/new-password" className="show-web"> */}
            <div className="show-web" onClick={() => this.doforgotPassword()}>
              <StartButton
                className="start-btn"
                height="65px"
                startText="Continue"
              />
            </div>
          {/* </NavLink> */}
          {/* <NavLink to="/new-password" className="show-mobile"> */}
            <div className="show-mobile" onClick={() => this.doforgotPassword()}>
              <StartButton
                className="start-btn"
                height="50px"
                startText="Continue"
              />
            </div>
          {/* </NavLink> */}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    forgotPassword: state.Auth.forgotPassword,
    forgotPasswordErr: state.Auth.forgotPasswordErr
  };
}

export default connect(mapStateToProps, { forgotPasswordAction })(
  withRouter(ForgotPassword)
);
