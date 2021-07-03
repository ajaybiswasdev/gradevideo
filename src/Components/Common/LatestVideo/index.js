import React from "react";
import "./LatestVideo.scss";
import { PlayArrow } from '@material-ui/icons';

import img1 from "../../../Assets/AboutUs/img1.png";
import { VideoModal } from "../../../Components";
import tutorVideo2 from "../../../Assets/Video/newClient.mp4";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class LatestVideo extends React.Component {

    state = {
        isLatestVideoHover: false,
        isVideoModal: false,
    };
  
    latestVideoHover = (index) => {
        this.setState({isLatestVideoHover: true});
    };

    latestVideoHoverOut = () => {
        this.setState({isLatestVideoHover: false});
    };

    playVideo = (id) => {
        // this.setState({isVideoModal: true});
        this.props.history.push(`/gradeVideo/${id}`);
    };

    closeVideoModal = () => {
        this.setState({isVideoModal: false});
    };

    render() {
        const {isLatestVideoHover, tutorVideo2} = this.state;
        const {latest_video} = this.props;
        return (
            <div className="latest-video-component">
                <h2>LATEST VIDEO</h2>
                <div className="col-lg-5 latest-video-chanel"
                    onMouseOver={()=>this.latestVideoHover()}
                    onMouseLeave={()=>this.latestVideoHoverOut()}
                    onClick={()=>this.playVideo(latest_video.id)}>
                    <div className="latest-video-chanel-img"
                        style={{ backgroundImage:`url(${latest_video.meta_image})`}}>
                        <div className="show-web">
                            {isLatestVideoHover &&
                                <div className="play-btn-bg ">
                                    <PlayArrow className="play-icon"/>
                                </div>
                            }
                        </div>
                        <div className="show-mobile">
                            <div className="play-btn-bg">
                                <PlayArrow className="play-icon"/>
                            </div>
                        </div>
                    </div>
                    {/* <video width="100%" height="100%" 
                        preload="metadata">
                        <source src={`${videoUrl}#t=0.01`} type="video/mp4" />
                    </video> */}
                    <h2 className="latest-video-description">
                        {latest_video.name}
                    </h2>
                    {isLatestVideoHover && 
                        <h3 className="latest-video-description show-web">
                            {latest_video.description}
                        </h3>
                    }
                </div>
                <VideoModal
                    isVideoModal={this.state.isVideoModal}
                    closeVideoModal={(e) => this.closeVideoModal(e)}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {

})(withRouter(LatestVideo));