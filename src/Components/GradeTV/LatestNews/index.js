import React from "react";
import "./LatestNews.scss";
import { withRouter } from "react-router-dom";
import { SubscribeModal } from "../../../Components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import Helper from '../../../Util/Helper';
import {
  tvSubscribeAction,
} from "../../../Redux/Actions";

class LatestNews extends React.Component {
  state = {
    isSubscribeModal: false
  };

  subscribe = () => {
    this.setState({isSubscribeModal: true});
  };

  subscribeConfirm = (status, email) => {    
    this.setState({isSubscribeModal: false});
    if(status){
      Helper.showSpinner();

      const formData = new FormData()
      formData.append('email', email);
      formData.append('tag', 'Grade TV');

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
    const { news, testimonials } = this.props;
    return (
      <div className="news-component">
        <div className="container">
          <div className="row">
            {news && news.length > 0 && <div className="col-lg-6">
              <h2>
                Latest News
              </h2>
              {news.map((data, index)=> (
                <div className="new-item" key={index}>
                  <h4>{data.title}</h4>
                  <p className="time-txt">{data.published_date}</p>
                </div>
              ))}
            </div>}
            <div className="col-lg-6">
              <h2>
                Stay in the grow
              </h2>
              <p className="stay-description">
                Recur subscribers are the first to receive news updates, industry deep dives, data analysis—and much more. Sign up now to get on the list.
              </p>
              <div className="subscribe-btn" onClick={()=>this.subscribe()}>
                SUBSCRIBE
              </div>
                <Slider
                  dots= {true}
                  infinite= {true}
                  speed= {500}
                  slidesToShow= {1}
                  slidesToScroll= {1}
                  arrows= {false}>
                  {testimonials.map((data, index)=> (
                    <div className="teacher-summary" key={index}>
                      <div className="summary">{data.summary}</div>
                      <div className="profile-info">
                        <img src={data.profile.image} alt="core-bg" className="avatar" />
                        <div className="name">
                          {data.profile.name} <br/>
                          role
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
            </div>
          </div>
        </div>
        <SubscribeModal
          isSubscribeModal={this.state.isSubscribeModal}
          subscribeConfirm={(e, r) => this.subscribeConfirm(e, r)}
          title="Subscribe for the next update"
          description="Don't miss out on the latest subscription news. Join the 18,000+ companies following Recur today."
          btnTxt="SUBMIT"
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
})(withRouter(LatestNews));
