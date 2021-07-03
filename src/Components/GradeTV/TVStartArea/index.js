import React from "react";
import "./TVStartArea.scss";
import gradeTvLogo from "../../../Assets/Tv/GradeTV-logo.png";
import { NavLink, withRouter } from "react-router-dom";
import { AddCircleRounded } from '@material-ui/icons';
import { SubscribeModal } from "../../../Components";
import Helper from '../../../Util/Helper';
import { toast } from "react-toastify";
import { connect } from "react-redux";
import {
  tvSubscribeAction,
} from "../../../Redux/Actions";

class TVStartArea extends React.Component {
  state = {
    isSubscribeModal: false
  };

  subscribe = () => {
    this.setState({isSubscribeModal: true});
  };

  subscribeConfirm = (status, email) => {    
    this.setState({isSubscribeModal: false});
    if(status){
      Helper.showSpinner();

      const formData = new FormData()
      formData.append('email', email);
      formData.append('tag', 'Grade TV');

      this.props.tvSubscribeAction(formData).then(()=>{
        const { subscribeRes, subscribeErr } = this.props;
        
        if(subscribeRes){
          toast(subscribeRes);
        } else {
          toast("Error!");
        };
        Helper.hideSpinner();
      });
    };
  };

  render() {
    const { tvDatas } = this.props;
    return (
      <div className="tv-startarea-component" style={{ backgroundImage:`url(${tvDatas.page_cover})`}}>
        <div className="container">
          <div className="tv-start-header">
            <img src={gradeTvLogo} alt="logo" className="logo-img"/>
          </div>
          <div className="col-lg-6 tv-title">
            <h1>
              {tvDatas.title}
            </h1>
            <h4>
              {tvDatas.subtitle}
            </h4>
            <div className="subscribe-btn" onClick={()=>this.subscribe()}>
              <AddCircleRounded className="play-icon mr-2"/>
              SUBSCRIBE
            </div>
          </div>
        </div>
        <SubscribeModal
          isSubscribeModal={this.state.isSubscribeModal}
          subscribeConfirm={(e, r) => this.subscribeConfirm(e, r)}
          title="Subscribe for the next update"
          description="Don't miss out on the latest subscription news. Join the 18,000+ companies following Recur today."
          btnTxt="SUBMIT"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  subscribeRes: state.Auth.subscribeRes,
  subscribeErr: state.Auth.subscribeErr,
});

export default connect(mapStateToProps, {
  tvSubscribeAction
})(withRouter(TVStartArea));
