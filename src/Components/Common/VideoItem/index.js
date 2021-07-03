import React from "react";
import "./VideoItem.scss";
import StarRatings from "react-star-ratings";
import { StarSVGViewBox, StarSVGIconPath } from "../../../Constant";
import { PlayArrow } from '@material-ui/icons';
import { VideoModal } from "../../../Components";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class VideoItem extends React.Component {

  state = {
    isVideoModal: false,
    video_hover: false,
  };
  
  videoHover = () => {
    this.setState({video_hover: true});
  };

  videoHoverOut = () => {
    this.setState({video_hover: false});
  }

  playVideo = (id) => {
    // this.setState({isVideoModal: true});
    this.props.history.push(`/gradeVideo/${id}`);
  }

  closeVideoModal = () => {
    this.setState({isVideoModal: false});
  }

  render() {
    const { item, className } = this.props;
    const { video_hover } = this.state;
    return (
      <div className={`video-item-component ${className || ""}`}>
        <div className="col-lg-12 video-container"
          onMouseOver={()=>this.videoHover()}
          onMouseLeave={()=>this.videoHoverOut()}
          onClick={()=>this.playVideo(item.id)}>

          <div className="video-item">
            <div className="video-image">
              <img src={item.meta_image} alt="calendar" className="image-size"/>
              <div className="show-web">
                {video_hover && 
                  <div className="play-btn-bg">
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
            
            <div className="title-description">
              <h2>{item.name}</h2>
              {video_hover && 
                <h3>{item.description}</h3>
              }
            </div>    
          </div>
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

})(withRouter(VideoItem));
