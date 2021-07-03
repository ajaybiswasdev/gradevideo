import React from "react";
import "./Channels.scss";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import img1 from "../../../Assets/AboutUs/img1.png";
import img2 from "../../../Assets/AboutUs/img2.png";
import img3 from "../../../Assets/AboutUs/img3.png";

import { ChevronRight } from '@material-ui/icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BigVideos = [
  {category: 'PRICING', title: "DTC Priced Right",  picture: img1, rule: 'SO1 EO2', details: "Each week ProfitWell breaks down strategies and insights on how subscrition compaines from all corners of the market can with with monetization."},
  {category: "REVENUE OPERATONS", title: 'RevOps and Hops',  picture: img2, rule: 'SO1 EO2', details: "Each week ProfitWell breaks down strategies and insights on how subscrition compaines from all corners of the market can with with monetization."}, 
  {category: "REVENUE OPERATONS", title: 'RevOps and Hops',  picture: img3, rule: 'SO1 EO2', details: "Each week ProfitWell breaks down strategies and insights on how subscrition compaines from all corners of the market can with with monetization."}, 
  {category: "REVENUE OPERATONS", title: 'RevOps and Hops',  picture: img1, rule: 'SO1 EO2', details: "Each week ProfitWell breaks down strategies and insights on how subscrition compaines from all corners of the market can with with monetization."}, 
  {category: "REVENUE OPERATONS", title: 'RevOps and Hops',  picture: img1, rule: 'SO1 EO2', details: "Each week ProfitWell breaks down strategies and insights on how subscrition compaines from all corners of the market can with with monetization."}, 
]

class Channels extends React.Component {
  state = {
    big_chanel_index: null,
    small_chanel_index: null
  };

  constructor(props) {
    super(props);
    
  }

  
  bigChanelHover = (index) => {
    this.setState({big_chanel_index: index});
  };

  bigChanelHoverOut = () => {
    this.setState({big_chanel_index: null});
  }

  watching = (item) => {
    var channel_name = item.name.replace(/\s+/g, '-');
    this.props.history.push(`/channel/${channel_name}`);
  }

  render() {
    const {big_chanel_index} = this.state;
    const { channels } = this.props;
    console.log("chanels data", channels)
    return (
      <div className="channels-component">
        <div className="container">
          <div className="body show-web">
            <Slider
              dots= {false}
              infinite= {false}
              speed= {500}
              slidesToShow= {window.innerWidth > 1237 ? 4 : 3}
              slidesToScroll= {1}>
              {(channels && channels.length > 0) && channels.map((data, index) => (
                <div className="item" key={index}>
                  <div className="big-chanel-img"
                    // style={{ backgroundImage:`url(${data.image})`}}
                    onMouseOver={()=>this.bigChanelHover(index)}
                    onMouseLeave={()=>this.bigChanelHoverOut()}>
                    {big_chanel_index === index ?
                      <div className="big-chanel-item-hover">
                        <img src={data.image} alt="logo" className="chalel-cover-img"/>
                        <div className="big-chanel-item-content-hover">
                          <p className="big-changel-title-category">{data.channel_type}</p>
                          <div className="hover-details">
                            <p className="big-changel-rule-hover">{data.name}</p>
                            <p className="big-changel-description">{data.description}</p>
                            <div className="start-watch-btn " onClick={(e) => this.watching(data)}>
                              <p className="btn-txt">START WATCHING</p>
                              <div className="overlay" />
                              {/* <ChevronRight className="right-arrow-icon"/> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      :
                      <div className="big-chanel-item">
                        <img src={data.image} alt="logo" className="chalel-cover-img"/>
                        <div className="big-chanel-item-content">
                          <img src={data.logo} alt="logo" className="chalel-logo"/>
                          <p className="big-changel-title-category">{data.channel_type}</p>
                          <p className="big-changel-title">{data.name}</p>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="body show-mobile">
            <Slider
              dots= {false}
              infinite= {true}
              speed= {500}
              slidesToShow= {1}
              slidesToScroll= {1}>
              {(channels && channels.length > 0) && channels.map((data, index) => (
                <div className="item" key={index}>
                  <div className="big-chanel-img"
                    key={index}
                    style={{ backgroundImage:`url(${data.image})`}}>
                    <div className="big-chanel-item">
                      <div className="big-chanel-item-content">
                        <p className="big-changel-title-category">{data.channel_type}</p>
                        <p className="big-changel-title">{data.name}</p>
                      </div>
                      <div className="start-watch-btn" onClick={(e) => this.watching(data)}>
                        START WATCHING
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {

})(withRouter(Channels));