import React from "react";
import "./Header.scss";
import logo from "../../../Assets/Header/logo.png";
import logo2 from "../../../Assets/Header/logo2.png";
import hamburger from "../../../Assets/Header/hamburger.svg";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { toggleSidebar, signOutAction } from "../../../Redux/Actions";
import { ReactSVG } from "react-svg";
import { GetDashboardUrl } from "../../../Constant";

class Header extends React.Component {
  state = {
    transform: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    this.setState({
      transform: window.scrollY > 0 ? true : false,
    });
  };

  openSidebar = () => {
    this.props.toggleSidebar(true);
  };

  checkRoute = () => {
    if (
      this.props.location.pathname === "/" ||
      this.props.location.pathname === "/tutor-home"
    ) {
      return true;
    }
    return false;
  };

  checkSignInPage = () => {
    const pathName = this.props.location.pathname;
    if (
      pathName === "/sign-in" ||
      pathName === "/forgot-password" ||
      pathName === "/new-password"
    ) {
      return true;
    }
    return false;
  };

  checkPage = () => {
    const pathName = this.props.location.pathname;
    if (pathName === "/sign-up" || pathName === "/tutor-signup")
      return "sign-up";
    if (pathName === "/gradeVideo")
      return "gradeVideo";
    if (
      pathName === "/sign-in" ||
      pathName === "/forgot-password" ||
      pathName === "/new-password"
      
    )
      return "sign-in";
    return "normal";
  };

  checkTutor = () => {
    const pathName = this.props.location.pathname;
    return pathName === "/tutor-home" ? true : false;
  };

  isLogin() {
    return this.props.token;
  }

  isLogOut = () => {    
    this.props.signOutAction();
    sessionStorage.clear()
    localStorage.clear()
    window.location.href = "/"
  }

  render() {
    const { user, token } = this.props;
    return (
      <React.Fragment>
        {this.checkPage() === "sign-up" ? (
          <div className="signup-header-component">
            <div className="container signup-container">
              <NavLink className="menu-item" exact to="/">
                <img src={logo} alt="logo" />
              </NavLink>
            </div>
          </div>
        ) : this.checkPage() === "sign-in" ? (
          <div className={`header-component`}>
            <div className="container signin-container">
              <NavLink className="menu-item" exact to="/">
                <img src={logo} alt="logo" />
              </NavLink>
            </div>
          </div>
        ) : (
          <div
            className={`header-component ${
              this.state.transform || !this.checkRoute()
                ? "transform-header"
                : ""
            }`}
          >
            <div className="container normal-container">
              <NavLink className="menu-item show-web-flex" exact to="/">
                <img src={logo} alt="logo" />
              </NavLink>
              <NavLink className="menu-item show-mobile" exact to="/">
                <img src={logo2} alt="logo" />
              </NavLink>
              {this.checkTutor() ? (
                <div className="menu">
                  <NavLink className="menu-item extra-item" exact to="/sign-in">
                    Sign In
                  </NavLink>
                  <NavLink className="menu-item extra-item" exact to="/sign-up">
                    FREE TRIAL LESSON
                  </NavLink>
                </div>
              ) : (
                <div className="menu">
                  <a className="menu-item" href="/#section-1-4">
                    Why Us
                  </a>
                  <NavLink className="menu-item" exact to="/features">
                    Features
                  </NavLink>
                  {/* <NavLink className="menu-item" exact to="/reviews">Reviews</NavLink> */}
                  {/* <NavLink className="menu-item" exact to="/">Reviews</NavLink> */}
                  <a className="menu-item" href="/#section-1-9">
                    Reviews
                  </a>
                  {/* <NavLink className="menu-item" exact to="/tutors">Tutors</NavLink> */}
                  <a className="menu-item" href="/#section-1-7">
                    Tutors
                  </a>

                  <NavLink className="menu-item" exact to="/demo">
                    Demo
                  </NavLink>
                  <NavLink className="menu-item" exact to="/values">
                    Values
                  </NavLink>
                  {/* <NavLink className="menu-item" to="#section-1-5">Price</NavLink>  */}
                  <a className="menu-item" href="/#section-1-5">
                    Pricing
                  </a>
                  {/* <NavLink className="menu-item" exact to="/gradeTV">
                    Grade TV
                  </NavLink> */}
                  {/* <NavLink className="menu-item" exact to="/gradeTV">
                    Podcast
                  </NavLink> */}
                  <NavLink className="menu-item extra-item" exact to="/sign-in">
                    Sign In
                  </NavLink>
                  <NavLink className="menu-item extra-item" exact to="/sign-up">
                    FREE TRIAL LESSON
                  </NavLink>
                </div>
              )}
              {this.checkTutor() ? (
                <div className="menu extra-menu">
                      <NavLink className="menu-item sign-up" exact to="/sign-in">
                        Sign In
                      </NavLink>
                  {/* <NavLink
                    className="menu-item sign-up"
                    exact
                    to="/tutor-signup"
                  >
                    FREE TRIAL LESSON
                  </NavLink> */}
                </div>
              ) : (
                <div className="menu extra-menu">
                  <NavLink className="menu-item" exact to="/sign-in">
                    Sign In
                  </NavLink>
                  <NavLink
                    className="menu-item sign-up"
                    exact
                    to="/sign-up"
                  >
                    FREE TRIAL LESSON
                  </NavLink>
                </div>
              )}
              <div className="show-mobile">
                <NavLink className="header-start-button" exact to="/sign-up">
                  FREE TRIAL LESSON
                </NavLink>
              </div>
              <div className="hamburger" onClick={this.openSidebar}>
                <ReactSVG src={hamburger} />
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.Auth.token,
    user: state.Auth.user,
  };
}

export default connect(mapStateToProps, { 
  toggleSidebar,
  signOutAction
})(withRouter(Header));
