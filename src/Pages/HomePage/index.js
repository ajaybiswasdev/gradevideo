import React from "react";

import "./HomePage.scss";
import { connect } from "react-redux";
import {
  HowItWorks,
  OurCore,
} from "../../Components";
import {
  
} from "../../Redux/Actions";
import { GetDashboardUrl } from "../../Constant";
import { Helmet } from 'react-helmet';
import { withRouter } from "react-router-dom";
import Helper from '../../Util/Helper';

class HomePage extends React.Component {
  state = {};

  componentDidUpdate() {    
    
  }

  render() {
    const { tutors, connections, plans } = this.props;
    return (
      <main>
        <div className="home-page" ref={this.workContainer}>
          <HowItWorks />
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  
});

export default connect(mapStateToProps, {
  
})(withRouter(HomePage));
