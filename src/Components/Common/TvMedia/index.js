import React from "react";
import "./TvMedia.scss";
import { PlayArrow } from '@material-ui/icons';

export default class TvMedia extends React.Component {
  render() {
    const { item } = this.props;
    
    return (
      <div className="tvMedia-component">
        <div className="tvMedia-item">
          <div className="img-container">
            <img src={item.meta_image} className="meta-image" alt="tutor_content" />
          </div>
          <div 
            className="play-btn-bg" >
            <PlayArrow className="play-icon"/>
          </div>
        </div>
      </div>
    );
  }
}