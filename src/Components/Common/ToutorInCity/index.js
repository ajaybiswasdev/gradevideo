import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import './ToutorInCity.scss';
import tutor_photo from  '../../../Assets/Home/tutor-photo-3.png';
import check_icon from  '../../../Assets/Icon/check-icon.png';
import pen_icon from  '../../../Assets/Icon/pen-icon.png';
import clock_icon from  '../../../Assets/Icon/clock-icon.png';
import bank from  '../../../Assets/Common/bank.png';
import StarRatings from "react-star-ratings";
import { StarSVGViewBox, StarSVGIconPath } from "../../../Constant";

class ToutorInCity extends React.Component {

    moreInfo = () => {
      this.props.history.push(`/sign-up`);
    };
   
    render() {
        const { item } = this.props;
        return (
            <div className="ToutorInCity-component">
                <div className="ToutorInCity-container">
                    <div className="main-row">
                        <div className="left-area">
                            <div className="avatar-area">
                                <img src={item.image} alt="avatar" className="tutor-avatar" />
                            </div>
                        </div>
                        <div className="right-area">
                            <div className="info-area">
                                <div className="sub-info first-area">
                                    <div className="name-area">
                                        <div className="name">{item.name}</div>
                                        <div className="rating-container show-web">
                                            <StarRatings
                                                rating={item.rating}
                                                starDimension="20px"
                                                starSpacing="2.14px"
                                                starRatedColor="#23A4EF"
                                                starEmptyColor="#D3EDFC"
                                                svgIconViewBox={StarSVGViewBox}
                                                svgIconPath={StarSVGIconPath}
                                            />
                                        </div>
                                        <p className="show-web">{item.rating}</p>
                                        <div className="review-count show-web">({item.review_count} reviews)</div>
                                    </div>
                                    <div className="more-info-button" onClick={()=>this.moreInfo()}>
                                        More Info
                                    </div>
                                </div>
                                <div className="sub-info">
                                    <div className="col-lg-8 item-info">
                                        <img src={check_icon} alt="check_icon"/>
                                        <p className="ml-2 mr-1">Verified </p>
                                        <p className="mr-1 font-weight-bold">{item.verified}</p>
                                        <p className="mr-1">Tutor Near </p>
                                        <p className="font-weight-bold">{item.tutorNear}</p>
                                    </div>
                                    <div className="col-lg-4 item-info">
                                        <img src={bank} alt="bank" />
                                        <div className="ml-2">{item.school}</div>
                                    </div>
                                </div>
                                <div className="sub-info">
                                    <div className="col-lg-8 item-info">
                                        <img src={pen_icon} alt="check_icon"/>
                                        <p className="ml-2 mr-1">Skills: </p>
                                        <p className="mr-1 font-weight-bold">{item.skills[0]}</p>
                                        <p className="main-color">+{item.skills.length} More</p>
                                    </div>
                                    <div className="col-lg-4 item-info">
                                        <img src={clock_icon} alt="clock_icon" />
                                        <div className="ml-2 hour-container">
                                            <p className="font-weight-bold">{item.tutoring_hour}+</p> 
                                            <p>tutoring hours</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile-details show-web">
                                    <p>{item.about_me}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-details show-mobile">
                        <p>{item.about_me}</p>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default connect()(
    withRouter(ToutorInCity)
);
