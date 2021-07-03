import React, { useEffect } from "react";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.scss";
import { Helmet } from 'react-helmet';
import Intercom from 'react-intercom';
import { Header, Sidebar, Footer, Loader } from "./Components";
import {
  HomePage,
  GradeTVPage,
  GradeVideoPage,
  GradeVideoDetailPage,
} from "./Pages";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { initAppAction } from "./Redux/Actions";
import BeatLoader from 'react-spinners/BeatLoader'
import { EventEmitter } from './Util/events';
import { css } from "@emotion/core";
import { GetDashboardUrl } from "./Constant";
import _ from 'lodash'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const override = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

class App extends React.Component {
  state = {
    isBlur: false,
    loading: false
  };

  static getDerivedStateFromProps(props, state) {
    return {
      isBlur: props.isSidebarOpen,
    };
  }

  componentDidMount() {
    this.props.initAppAction();
    this.intercomSetting();

    const user = JSON.parse(localStorage.getItem("user"));
    const token = JSON.parse(localStorage.getItem("token"));
    if (user && token ){
      if(user.role === 'tutor'){
        if(!_.isEmpty(user.schedule)){
          window.location.href = GetDashboardUrl(user, token);       
        };
      };

      if(user.role === 'student'){
        if(user.can_book_trial || user.plan_frequency || user.trial_lesson.status === 'pending'){
          window.location.href = GetDashboardUrl(user, token)
        };
      };
    };
  };

  intercomSetting = () => {
    window.intercomSettings = {
      app_id: "mx9avtti"
    };
  };

  
  render() {
    const { isBlur, loading } = this.state;
    EventEmitter.subscribe('isLoading', (event) => this.setState({loading: event}));

    if (isBlur) {
      if (document.body) {
        const body = document.body;
        body.classList.add("modal-open");
      }
    } else {
      if (document.body) {
        const body = document.body;
        body.classList.remove("modal-open");
      }
    }

    return (
      <BrowserRouter basename="/">
        <ScrollToTop />
        <div className="App">          
          <Sidebar />
          <div id="main" className={`${isBlur ? "blur" : ""}`}>
            <div className="content">
              <Switch>
                <Route exact path="/" component={HomePage} />
                
                <Route exact path="/gradeTV" component={GradeTVPage} />
                <Route exact path="/channel/:channelName" component={GradeVideoPage} />
                <Route exact path="/gradeVideo/:id" component={GradeVideoDetailPage} />
              </Switch>
            </div>
          </div>
        </div>
        <div className={loading ? "overlay-loader" : "d-none"}>
          <BeatLoader
            css={override}
            size={30}
            color={"#FFF"}
            loading={loading}
          />
        </div>
        <ToastContainer />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSidebarOpen: state.Sidebar.isOpen,
  };
};

export default connect(mapStateToProps, { initAppAction })(App);
