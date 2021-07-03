import React from "react";
import "./Read.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getBlogListingAction } from "../../../Redux/Actions";

class Read extends React.Component {
  state = {
    
  };

  navigateToArticle = (item) => {
    this.props.history.push(`/blog/${item.url}`);
  };

  render() {
    const { read } = this.props;
    return (
      <div className="read-component">
        <div className="container">
          <div className="title">
            <h2>
              Read
            </h2>
            <div className="description">
              <span className="mr-2">•</span>
              The subscription shows you need to see.
              </div>
          </div>
          <div className="body">
            <div className="row main-row">
              {read.map((item, index) => (
                <div className="col-lg-6" key={index}>
                  
                </div>
              ))}
              
            </div>
            </div>
          </div> 
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bloglist: state.Core.bloglist,
  };
}

export default connect(mapStateToProps, { getBlogListingAction })(
  withRouter(Read)
);