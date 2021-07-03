import React from 'react';
import './Sidebar.scss';
import logo from '../../../Assets/Header/logo.png';
import add from '../../../Assets/Common/add.svg';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../../Redux/Actions';
import { StartButton } from '../../';
import { ReactSVG } from 'react-svg'

class Sidebar extends React.Component {

    state = {
        isOpen: false,
        isPrevOpen: false,
    }

    static getDerivedStateFromProps(props, state) {
        return {
            isOpen: props.isOpen,
            isPrevOpen: state.isOpen,
        }
    }

    closeSidebar = () => {
        this.props.toggleSidebar(false);
    }

    render() {
        const { isOpen, isPrevOpen } = this.state;
        return (
            <div className={`sidebar-component ${isOpen ? 'active' : isPrevOpen ? 'inactive' : ''}`}>
                <div className="sidebar-wrapper">
                    <div className="sidebar-content">
                        <div className="logo-area">
                            <img src={logo} alt="logo" />
                            <ReactSVG src={ add } className='icon-close' onClick={ () => this.closeSidebar() }/>
                        </div>
                        <div className="menu">
                            <NavLink className="menu-item" exact to="/" onClick={this.closeSidebar}>Home</NavLink>
                            <a className="menu-item" href="/#section-1-4" onClick={this.closeSidebar}>
                                Why Us
                            </a>
                            {/* <NavLink className="menu-item" exact to="/about-us" onClick={this.closeSidebar}>Why Us</NavLink> */}
                            <NavLink className="menu-item" exact to="/features" onClick={this.closeSidebar}>Features</NavLink>
                            {/* <NavLink className="menu-item" exact to="/reviews" onClick={this.closeSidebar}>Reviews</NavLink> */}
                            {/* <NavLink className="menu-item" exact to="/" onClick={this.closeSidebar}>Reviews</NavLink> */}
                            <a className="menu-item" href="/#section-1-9" onClick={this.closeSidebar}>Reviews</a>
                            {/* <NavLink className="menu-item" exact to="/tutors" onClick={this.closeSidebar}>Tutors</NavLink> */}
                            <a className="menu-item" href="/#section-1-7" onClick={this.closeSidebar}>Tutors</a>                   

                            {/* <NavLink className="menu-item" exact to="/try-demo" onClick={this.closeSidebar}>Demo</NavLink> */}
                            <NavLink className="menu-item" exact to="/demo" onClick={this.closeSidebar}>Demo</NavLink>
                            <NavLink className="menu-item" exact to="/values" onClick={this.closeSidebar}>Values</NavLink>
                            {/* <NavLink className="menu-item" exact to="/price" onClick={this.closeSidebar}>Pricing</NavLink> */}
                            <a className="menu-item" href="/#section-1-5" onClick={this.closeSidebar}>Pricing</a>                            

                            {/* <NavLink className="menu-item" exact to="/share" onClick={this.closeSidebar}>Share</NavLink> */}
                            <div className="sub-menu">
                                <NavLink className="menu-item" exact to="/sign-in" onClick={this.closeSidebar}>Sign In</NavLink>
                                <NavLink className="menu-item" exact to="/sign-up" onClick={this.closeSidebar}>SIGN UP FREE</NavLink>
                                <NavLink className="menu-item" exact to="/become-tutor" onClick={this.closeSidebar}>Become a tutor</NavLink>
                            </div>
                            <StartButton className="start-btn" height="45px" />
                        </div>
                    </div>
                    <div className="sidebar-block" onClick={ () => this.closeSidebar() }></div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    isOpen: state.Sidebar.isOpen,
  }
}

export default connect(mapStateToProps, { toggleSidebar })(withRouter(Sidebar));