import React from "react";
import "./VideoStartArea.scss";
import gradeTVLogo from "../../../Assets/Tv/GradeTV-logo.png";
import { NavLink, withRouter } from "react-router-dom";
import { PlayArrow } from '@material-ui/icons';
import { VideoModal, SubscribeModal } from "../../../Components";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Helper from '../../../Util/Helper';

import {
  tvSubscribeAction,
} from "../../../Redux/Actions";

class VideoStartArea extends React.Component {
  state = {
    isVideoModal: false,
    isSubscribeModal: false
  };

  playVideo = () => {
    // this.props.history.push(`/gradeVideo/1`);
    // this.setState({isVideoModal: true});
  }

  closeVideoModal = () => {
    this.setState({isVideoModal: false});
  }

  subscribe = () => {
    this.setState({isSubscribeModal: true});
  }

  subscribeConfirm = (status, email) => {    
    this.setState({isSubscribeModal: false});
    if(status){
      Helper.showSpinner();

      const formData = new FormData()
      formData.append('email', email);
      formData.append('tag', this.props.channelData.name);

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
    const { channelData } = this.props;

    return (
      <div className="video-startarea-component"
      style={{ backgroundImage:`url(${channelData.cover_image})`}}
      onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <div className="video-startarea-container">
          <div className="video-start-header">
            <img src={gradeTVLogo} alt="logo" className="logo-img"/>
          </div>
          <div className="col-lg-6 video-title">
            {/* <h1>
              GradeTv bg Gradegetter Presents
            </h1> */}
            <img src={channelData.logo} alt="logo" className="logo" />
            <h4>{channelData.description}</h4>
            <div className="btn-area">
              {/* <div 
                className="normal-btn play-btn "
                onClick={()=>this.playVideo()}>
                <PlayArrow className="play-icon mr-2"/>
                Play trailer
              </div> */}
              <div 
                className="normal-btn subscribe-btn"
                onClick={()=>this.subscribe()}>
                Subscribe for updates
              </div>
            </div>
          </div>
        </div>
        
        <VideoModal
          isVideoModal={this.state.isVideoModal}
          closeVideoModal={(e) => this.closeVideoModal(e)}
        />
        <SubscribeModal
          isSubscribeModal={this.state.isSubscribeModal}
          subscribeConfirm={(e, r) => this.subscribeConfirm(e, r)}
          title="Get expert scaling strategies delivered to your inbox weekly 👇"
          btnTxt="Subscribe for updates"
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
})(withRouter(VideoStartArea));
