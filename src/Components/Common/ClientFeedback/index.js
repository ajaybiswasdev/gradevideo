import React from "react";
import "./ClientFeedback.scss";
import StarRatings from "react-star-ratings";
import { StarSVGViewBox, StarSVGIconPath } from "../../../Constant";

export default class ClientFeedback extends React.Component {
  render() {
    const { item, className } = this.props;
    const nameArray = item.name.split(" ");
    const initialName =
      nameArray.length === 2
        ? nameArray[0][0] +
          (nameArray[1][0] ? nameArray[1][0] : nameArray[0][1])
        : nameArray[0][0];
    return (
      <div className={`clientfeedback-component ${className || ""}`}>
        <div className="client-item">
          <div className="client-header">
            <div className={`initial initial-${item.level}`}>{initialName}</div>
            <div className="user-info">
              <div className="basic">
                {" "}
                <span className="name">{item.name}</span> from {item.address}{" "}
              </div>
              <div className="sub-info">
                <div className="subject">Knowledge: </div>
                <StarRatings
                  rating={item.knowledge}
                  starDimension="16px"
                  starSpacing="2.14px"
                  starRatedColor="#23A4EF"
                  starEmptyColor="#D3EDFC"
                  svgIconViewBox={StarSVGViewBox}
                  svgIconPath={StarSVGIconPath}
                />
              </div>
              <div className="sub-info">
                <div className="subject">Presentation: </div>
                <StarRatings
                  rating={item.presentation}
                  starDimension="16px"
                  starSpacing="2.14px"
                  starRatedColor="#23A4EF"
                  starEmptyColor="#D3EDFC"
                  svgIconViewBox={StarSVGViewBox}
                  svgIconPath={StarSVGIconPath}
                />
              </div>
            </div>
          </div>
          <div className="client-body">
            <div className="description">{item.description}</div>
            <div className="comment-date">{item.comment_date}</div>
          </div>
        </div>
        <div className="bg-dot small-dot span-dot" alt="bgdot" />
      </div>
    );
  }
}
