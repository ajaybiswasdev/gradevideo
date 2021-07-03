import React from "react";
import "./Partner.scss";

export default class Partner extends React.Component {
  render() {
    const { item, className } = this.props;
    
    return (
      <div className={`partner-component ${className || ""}`}>
        <div className="partner-item">
          <div className="logo-container">
            <img src={item.image} className="item-logo" alt="tutor_content" />
          </div>
          <div className="item-title">{item.name}</div>
          <div className="item-description">{item.description}</div>
        </div>
        <div className="bg-dot small-dot span-dot" alt="bgdot" />
      </div>
    );
  }
}
