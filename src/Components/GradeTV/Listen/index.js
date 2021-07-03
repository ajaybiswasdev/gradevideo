import React from "react";
import "./Listen.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Mic } from '@material-ui/icons';

class Listen extends React.Component {
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
    window.open(item.podcast_page_url);
  }

  render() {
    const {big_chanel_index, small_chanel_index} = this.state;
    const { listen } = this.props;
    return (
      <div className="listen-component">
        <div className="container">
          <div className="title">
            <h2>
              Listen
            </h2>
            <div className="description">
              <span className="mr-2">•</span>
              The subscription shows you need to see.
              </div>
          </div>
          <div className="body">
            <div className="chanel-row" >
              {listen.map((item, index) => (
                index < 2 && <div 
                  className="col-6 big-chanel-img show-web"
                  key={index} 
                  style={{ backgroundImage:`url(${item.image})`}}
                  onMouseOver={()=>this.bigChanelHover(index)}
                  onMouseLeave={()=>this.bigChanelHoverOut()}
                  onClick={(e) => this.watching(item)}>
                  {big_chanel_index === index ?
                    <div className="big-chanel-item-hover">
                      <div className="play-btn-bg ">
                        <Mic className="play-icon"/>
                      </div>
                      <p className="big-changel-title-category">{item.tag}</p>
                      <div className="hover-details">
                        <p className="big-changel-title-hover">{item.name}</p>
                        <p className="big-changel-description">{item.description}</p>
                        <div className="start-watch-btn" onClick={(e) => this.watching(item)}>
                          <p className="btn-txt">START LISTENING</p>
                          <div className="overlay" />
                        </div>
                      </div>
                    </div>
                    :
                    <div className="big-chanel-item">
                      <img src={item.logo} alt="logo" className="chalel-logo"/>
                      <p className="big-changel-title-category">{item.tag}</p>
                      <p className="big-changel-title">{item.name}</p>
                    </div>
                  }
                </div>
              ))}
              {listen.map((item, index) => (
                index < 2 && <div
                  className="col-sm-12 big-chanel-img show-mobile"
                  key={index} 
                  style={{ backgroundImage:`url(${item.image})`}}>
                  
                  <div className="big-chanel-item ">
                    <p className="big-changel-title-category">{item.tag}</p>
                    <p className="big-changel-title">{item.name}</p>
                    <div className="start-watch-btn" onClick={(e) => this.watching(item)}>
                      START LISTENING
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="chanel-row" >
              {listen.map((item, index) => (
                index > 1 && index < 4 && <div 
                  className="col-6 big-chanel-img show-web"
                  key={index} 
                  style={{ backgroundImage:`url(${item.image})`}}
                  onMouseOver={()=>this.smallChanelHover(index)}
                  onMouseLeave={()=>this.smallChanelHoverOut()}
                  onClick={(e) => this.watching(item)}>
                  {small_chanel_index === index ?
                    <div className="big-chanel-item-hover">
                      <div className="play-btn-bg ">
                        <Mic className="play-icon"/>
                      </div>
                      <p className="big-changel-title-category">{item.tag}</p>
                      <div className="hover-details">
                        <p className="big-changel-title-hover">{item.name}</p>
                        <p className="big-changel-description">{item.description}</p>
                        <div className="start-watch-btn" onClick={(e) => this.watching(item)}>
                          <p className="btn-txt">START LISTENING</p>
                          <div className="overlay" />
                        </div>
                      </div>
                    </div>
                    :
                    <div className="big-chanel-item">
                      <img src={item.logo} alt="logo" className="chalel-logo"/>
                      <p className="big-changel-title-category">{item.tag}</p>
                      <p className="big-changel-title">{item.name}</p>
                    </div>
                  }
                </div>
              ))}
              {listen.map((item, index) => (
                index > 1 && index < 4 && <div
                  className="col-sm-12 big-chanel-img show-mobile"
                  key={index} 
                  style={{ backgroundImage:`url(${item.image})`}}>
                  
                  <div className="big-chanel-item ">
                    <p className="big-changel-title-category">{item.tag}</p>
                    <p className="big-changel-title">{item.name}</p>
                    <div className="start-watch-btn" onClick={(e) => this.watching(item)}>
                      START WATCHING
                    </div>
                  </div>
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

})(withRouter(Listen));
