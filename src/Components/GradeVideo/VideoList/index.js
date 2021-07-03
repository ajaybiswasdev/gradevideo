import React from "react";
import "./VideoList.scss";
import { LatestVideo, VideoCarousel } from "../../../Components";

function innerFunc(item) {
  return {__html: item}
}

export default class VideoList extends React.Component {
  state = {
  };

  render() {
    const { channelData } = this.props;

    console.log("====channelData====", channelData)
    return (
      <div className="VideoList-component">
        {channelData.latest_video &&<LatestVideo latest_video={channelData.latest_video}/>}
        <div className="col-12 video-list-container">
          { channelData.folders.length > 0 && channelData.folders.map((item, index)=> (
            <div className="video-list" key={index}>
              <h2>{item.name}</h2>
              <VideoCarousel folerList={item.videos}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
