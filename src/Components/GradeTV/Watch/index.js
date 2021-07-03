import React from "react";
import "./Watch.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { PlayArrow } from '@material-ui/icons';

class Watch extends React.Component {
  state = {
    big_chanel_index: null,
    small_chanel_index: null
  };

  
  bigChanelHover = (index) => {
    this.setState({big_chanel_index: index});
  };

  bigChanelHoverOut = () => {
    this.setState({big_chanel_index: null});
  }

  smallChanelHover = (index) => {
    this.setState({small_chanel_index: index});
  };

  smallChanelHoverOut = () => {
    this.setState({small_chanel_index: null});
  }

  watching = (item) => {
    var channel_name = item.name.replace(/\s+/g, '-');
    this.props.history.push(`/channel/${channel_name}`);    
  };

  watchingBlog = (item) => {
    this.props.history.push(`/blog/${item.url}`);
  };

  render() {
    const {big_chanel_index, small_chanel_index} = this.state;
    const { watch, blogs } = this.props;
    return (
      <div className="watch-component">
        <div className="container">
          <div className="title">
            <h2>
              Watch
            </h2>
            <div className="description">
              <span className="mr-2">•</span>
              The subscription shows you need to see.
              </div>
          </div>
          <div className="body">
            <div className="chanel-header" >
              {watch.map((item, index) => (
                index < 2 && <div 
                  className="col-6 big-chanel-img show-web"
                  key={index} 
                  style={{ backgroundImage:`url(${item.image})`}}
                  onMouseOver={()=>this.bigChanelHover(index)}
                  onMouseLeave={()=>this.bigChanelHoverOut()}>
                  {big_chanel_index === index ?
                    <div className="big-chanel-item-hover">
                      <p className="big-changel-title-category">{item.channel_type}</p>
                      <div className="hover-details">
                        <p className="big-changel-title-hover">{item.name}</p>
                        <p className="big-changel-description">{item.description}</p>
                        <div className="start-watch-btn" onClick={(e) => this.watching(item)}>
                          <p className="btn-txt">START WATCHING</p>
                          <div className="overlay" />
                        </div>
                      </div>
                    </div>
                    :
                    <div className="big-chanel-item">
                      <img src={item.logo} alt="logo" className="chalel-logo"/>
                      <p className="big-changel-title-category">{item.channel_type}</p>
                      <p className="big-changel-title">{item.name}</p>
                    </div>
                  }
                </div>
              ))}
              {watch.map((item, index) => (
                index < 2 &&  <div
                  className="col-sm-12 big-chanel-img show-mobile"
                  key={index} 
                  style={{ backgroundImage:`url(${item.image})`}}>
                  
                  <div className="big-chanel-item ">
                    <p className="big-changel-title-category">{item.channel_type}</p>
                    <p className="big-changel-title">{item.name}</p>
                    <div className="start-watch-btn" onClick={(e) => this.watching(item)}>
                      START WATCHING
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="chanel-body">
              {blogs.map((item, index) => (
                index < 4 && <div className= "col-3 chanel-item show-web"  key={index} onMouseOver={()=>this.smallChanelHover(index)} onMouseLeave={()=>this.smallChanelHoverOut()}>
                  <div className="chanel-img-container">
                    <img src={item.picture} alt="channel" className="chanel-img"/>
                  </div>
                  {small_chanel_index === index &&
                    <div 
                      className="play-btn-bg" >
                      <PlayArrow className="play-icon"/>
                    </div>
                  }
                  {small_chanel_index === index ?
                    <div className="small-chanel-descripton-part-hover" >
                      <p className="small-chanel-hover-category">{item.topic.name}</p>
                      <p className="small-chanel-hover-title">{item.title}</p>
                      <p className="small-chanel-hover-description">{item.excerpt}</p>
                      <div className="start-watch-btn" onClick={(e) => this.watchingBlog(item)}>
                        START WATCHING
                      </div>
                    </div>
                    :
                    <div className="small-chanel-descripton-part">
                      <p className="small-chanel-category">{item.topic.name}</p>
                      <p className="small-chanel-title">{item.title}</p>
                    </div>
                  }
                </div>
              ))}
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {

})(withRouter(Watch));