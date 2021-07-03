import React from "react";
import "./Login.scss";
import email from "../../../Assets/Common/email.svg";
import key from "../../../Assets/Common/key.svg";
import { NavLink } from "react-router-dom";
import { StartButton } from "../../";
import { ReactSVG } from "react-svg";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signInAction,initAppAction } from "../../../Redux/Actions";
import { GetDashboardUrl } from "../../../Constant";
import {toast} from 'react-toastify';
import { Helmet } from 'react-helmet';
import _ from 'lodash'
import Helper from "../../../Util/Helper";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  componentDidMount() {
    this.props.initAppAction()
  }

  doSignIn = () => {
    const { username, password } = this.state;
    if (username && password){
      Helper.showSpinner();
      this.props.signInAction(username, password).then(()=>{
        Helper.hideSpinner();
        const {user, token, signErr} = this.props
        console.log("===login user===", user);
        if (user && token ){
          if(user.role === 'tutor'){
            if(_.isEmpty(user.schedule)){
              if(user.training_status === 11){
                var signup_progress = 3;
              } else {
                var signup_progress = 2;
              };
                this.props.history.push({
                  pathname: "/tutor-signup",
                  isUser: true,
                  user,
                  signup_progress
                });
            } else {
              window.location.href = GetDashboardUrl(this.props.user, this.props.token);       
            };
          };
  
          if(user.role === 'student'){
            if(user.can_book_trial || user.plan_frequency || user.trial_lesson.status === 'pending'){
              window.location.href = GetDashboardUrl(this.props.user, this.props.token);       
            } else {
              this.props.history.push({
                pathname: "/sign-up",
                isUser: true,
                user
              });
            };
          };
        }else{
          toast(signErr)
        }
      });
    } else {
      toast("Please fill all informations!")
    };
  };

  // componentDidUpdate(prevProps) {
  //   if (this.props.user && this.props.token && this.props.user.plan_frequency) {
  //     // this.props.history.push("/");
  //     window.location.href = GetDashboardUrl(this.props.user, this.props.token)
  //     // let win = window.open(
  //     //   GetDashboardUrl(this.props.user, this.props.token),
  //     //   "_blank"
  //     // );
  //     // if (win) win.focus();
  //   }
  // }

  render() {
    const { username, password } = this.state;
    const {signErr} = this.props
    return (
      <div className="login-component">
        <Helmet>
          <title>GradeGetter Login</title>
          <meta name="title" content="GradeGetter Login" />
          <meta name="description" content="Both tutors and students can access their portal here" />
          <meta property="type" content="website" />
          <meta property="url" content={window.location.origin}/>
          <meta property="image" content="https://gradegetter.com/gradegetter.png" />

          {/* <!-- Google / Search Engine Tags --> */}
          <meta itemprop="name" content="GradeGetter Login" />
          <meta itemprop="description" content="Both tutors and students can access their portal here" />
          <meta itemprop="image" content="https://gradegetter.com/gradegetter.png" />

          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:url" content={window.location.origin} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="GradeGetter Login" />
          <meta property="og:description" content="Both tutors and students can access their portal here" />
          <meta property="og:image" content="https://gradegetter.com/gradegetter.png" />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="GradeGetter Login"/>
          <meta name="twitter:description" content="Both tutors and students can access their portal here"/>
          <meta name="twitter:image" content="https://gradegetter.com/gradegetter.png"/>
        </Helmet>
        <h1>Sign In</h1>
        {/* {signErr? <p className="alert alert-danger">{signErr}</p> : null} */}
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
            placeholder="Username"
            value={username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
        </div>
        <div className="input-group custom-input append-input">
          <div className="input-group-prepend">
            <span className="input-group-text">
              {" "}
              <ReactSVG src={key} className="input-icon" />{" "}
            </span>
          </div>
          <input
            type="password"
            className="form-control"
            placeholder="************"
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <div className="input-group-append">
            <span className="input-group-text">
              {" "}
              <NavLink to="/forgot-password">Forgot Password?</NavLink>
            </span>
          </div>
        </div>
        <div className="action-area">
          <div className="sign-up">
            Haven’t an account? <NavLink to="/sign-up">Sign Up</NavLink>
          </div>
          <div className="show-web" onClick={() => this.doSignIn()}>
            <StartButton
              className="start-btn"
              height="65px"
              startText="Continue"
            />
          </div>
          <div className="show-mobile" onClick={() => this.doSignIn()}>
            <StartButton
              className="start-btn"
              height="50px"
              startText="Continue"
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.Auth.token,
    user: state.Auth.user,
    signErr: state.Auth.signErr
  };
}

export default connect(mapStateToProps, { signInAction,initAppAction })(withRouter(Login));
