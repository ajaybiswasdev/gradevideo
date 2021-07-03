import React from "react";
import "./HowItWorks.scss";
import coreBG from "../../../Assets/Home/core-bg.png";
import checkmark from "../../../Assets/Common/checkmark.png";
import work1 from "../../../Assets/Home/work1.png";
import work2 from "../../../Assets/Home/work2.png";
import work3 from "../../../Assets/Home/work3.png";

export default class HowItWorks extends React.Component {
  render() {
    return (
      <div className="works-component">
        <div className="container works-container">
          <div className="title">How It Works</div>
          <div className="row main-row">
            <div className="col-lg-4">
              <div className="item-area text-center">
                <div className="number-out center-item">
                  <div className="number-in center-item">1</div>
                </div>
                <div className="image-item first-image">
                  <img src={work1} alt="core-bg" />
                </div>
                <div className="des-item">
                  <h1>Tutoring Needs:</h1>
                  <p className="line-height">
                    Tell us your specific tutoring needs and the type of tutor
                    you would like to work with.
                  </p>
                </div>
              </div>
              {/* <div className="bg-dot" /> */}
            </div>

            <div className="col-lg-4">
              <div className="item-area text-center mx-auto">
                <div className="number-out center-item">
                  <div className="number-in center-item">2</div>
                </div>
                <div className="image-item">
                  <img src={work2} alt="core-bg" />
                </div>
                <div className="des-item">
                  <h1>Name your price:</h1>
                  <p className="line-height">
                    Choose what you can pay and how often you want to pay for
                    online tutoring services.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="item-area text-center">
                <div className="number-out center-item">
                  <div className="number-in center-item">3</div>
                </div>
                <div className="image-item third-image">
                  <img src={work3} alt="core-bg" />
                </div>
                <div className="des-item">
                  <h1>Placement:</h1>
                  <p>
                    Based on the information you share with us, we will pair you
                    with a qualified tutor that fits your needs. The first
                    lesson is always FREE!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
