import React from "react";
import "./Ebook.scss";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import img1 from "../../../Assets/Tv/eBook1.jpg";
import img2 from "../../../Assets/Tv/eBook2.png";
import img3 from "../../../Assets/Tv/eBook3.jpg";
import img4 from "../../../Assets/Tv/eBook2.png";

const BigVideos = [
  {category: 'ADMISSIONS', title: "Hacking College Admissions",  picture: img1, rule: 'SO1 EO2', description: "How We Got into Every Ivy League School + $4 Million in Scholarships... And How You Can, Too!"},
  {category: "TEST PREP", title: 'Make SAT Make Sense',  picture: img2, rule: 'SO1 EO2', description: "This book gives you all the tips and ticks needed to succeed at the SAT"}, 
  {category: "ADVISORY", title: 'Tutor hiring guide',  picture: img3, rule: 'SO1 EO2', description: "This is the guide our company uses  to hire some of the most inspiring tutors"}, 
  {category: "TEST PREP", title: 'Make SAT Make Sense',  picture: img4, rule: 'SO1 EO2', description: "This book gives you all the tips and ticks needed to succeed at the SAT"}, 
]

class Ebook extends React.Component {
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
    window.open(item.landingpage_url);
  };

  render() {
    const {big_chanel_index, small_chanel_index} = this.state;
    const { books } = this.props;
    return (
      <div className="ebook-component">
        <div className="container">
          <div className="title">
            <h2>
              Read
            </h2>
            <div className="description">
              <span className="mr-2">•</span>
                eBooks
              </div>
          </div>
          <div className="body">
            <div className="chanel-row">
              {books.map((data, index) => (
                <div
                  className="col-lg-3 col-sm-6 big-chanel-img show-web"
                  key={index} 
                  style={{ backgroundImage:`url(${data.image})`}}
                  onMouseOver={()=>this.bigChanelHover(index)}
                  onMouseLeave={()=>this.bigChanelHoverOut()}>
                  {big_chanel_index === index ?
                    <div className="big-chanel-item-hover">
                      <p className="big-changel-title-category">{data.tag}</p>
                      <div className="hover-details">
                        <p className="big-changel-rule-hover">{data.name}</p>
                        <p className="big-changel-description">{data.description}</p>
                        <div className="start-watch-btn" onClick={(e) => this.watching(data)}>
                          <p className="btn-txt">START READING</p>
                          <div className="overlay" />
                        </div>
                      </div>
                    </div>
                    :
                    <div className="big-chanel-item ">
                        <p className="big-changel-title-category">{data.tag}</p>
                        <p className="big-changel-title">{data.name}</p>
                        {/* <p className="big-changel-rule">{data.rule}</p> */}
                    </div>
                  }
                </div>
              ))}

              {BigVideos.map((data, index) => (
                <div
                  className="col-sm-12 big-chanel-img show-mobile"
                  key={index} 
                  style={{ backgroundImage:`url(${data.image})`}}>
                  
                  <div className="big-chanel-item ">
                    <p className="big-changel-title-category">{data.tag}</p>
                    <p className="big-changel-title">{data.title}</p>
                    <div className="start-watch-btn" onClick={(e) => this.watching(data)}>
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

})(withRouter(Ebook));