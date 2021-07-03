import React from "react";
import "./Subscribe.scss";
import { withRouter } from "react-router-dom";
import Helper from '../../../Util/Helper';
import { toast } from "react-toastify";
import { connect } from "react-redux";
import {
  tvSubscribeAction,
} from "../../../Redux/Actions";

class Subscribe extends React.Component {
  state = {
    subscribe_email: '',
    is_subscribe_email: true,
    contact_email: '',
    is_contact_email: true,
  };

  subscribe = () => {
    const { subscribe_email, is_subscribe_email } = this.state;
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(regEmail.test(subscribe_email)){
      this.setState({is_subscribe_email: true});

      Helper.showSpinner();

      const formData = new FormData()
      formData.append('email', subscribe_email);
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
    } else {
      this.setState({is_subscribe_email: false});
    };
  };

  contactUs = () => {
    const { contact_email, is_contact_email } = this.state;
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(regEmail.test(contact_email)){
      this.setState({is_contact_email: true});     
    } else {
      this.setState({is_contact_email: false});
    };
  };

  render() {
    const {subscribe_email, contact_email, is_subscribe_email, is_contact_email} = this.state;
    return (
      <div className="subscribe-component">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mt-3">
              <div className="left-subscribe">
                <h2>Stay tuned for more content</h2>
                <p className="description">Don't miss out on the latest Grade TV content. Join the many families and students ofllowing Grade TV  today.</p>
                <div className="send-box" >
                  <input className={`email-input ${is_subscribe_email? "" : "error-mail-input"}`}
                      placeholder="Email*"
                      value={subscribe_email}
                      onChange= {(event)=>this.setState({subscribe_email: event.target.value})}
                  />
                  <div className="subscribe-btn" onClick={()=>this.subscribe()}>SUBSCRIBE</div>
              </div>
              </div>
            </div>
            <div className="col-lg-6 mt-3">
              <div className="right-subscribe">
                <h2>Contribute to Grade TV</h2>
                <p className="description">Got an education  story or data that needs coverage? Let us know.</p>
                <div className="send-box" >
                  <input className={`email-input ${is_contact_email? "" : "error-mail-input"}`}
                      placeholder="Email address"
                      value={contact_email}
                      onChange= {(event)=>this.setState({contact_email: event.target.value})}
                  />
                  <div className="subscribe-btn" onClick={()=>this.contactUs()}>CONTSCT US</div>
              </div>
              </div>
            </div>
          </div>
        </div> 
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
})(withRouter(Subscribe));
