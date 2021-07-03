import React from "react";
import "./School.scss";

export default class School extends React.Component {
  render() {
    const { item, className } = this.props;
    
    return (
      <div className="school-component">
        <div className="school-item">
          <div className="col-lg-4 img-container">
            <img src={item.image} className="item-logo" alt="tutor_content" />
          </div>
          <div className="col-lg-8 description-container">
            <div className="item-title">{item.name}</div>
            <div className="item-description">{item.text}</div>
          </div>
        </div>
        <div className="bg-dot small-dot span-dot" alt="bgdot" />
      </div>
    );
  }
}