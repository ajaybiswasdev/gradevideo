import React from "react";
import "./ModalPopUp.scss";
import { Modal } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import add from "../../Assets/Icon/add.svg";
import { ReactSVG } from "react-svg";
export default class ModalPopUp extends React.Component {
  state = {
    isOpen: false,
    presentation: 0,
  };

  static getDerivedStateFromProps(props, state) {
    return {
      isOpen: props.isOpen,
    };
  }

  closeModal = () => {
    this.props.toggleReviewModal(false);
  };

  scheduleConfirm = () => {
    this.props.scheduleConfirm(this);
  };

  onHide = () => {};

  render() {
    const { isOpen, presentation } = this.state;
    return (
      <Modal
        show={isOpen}
        onHide={this.onHide}
        className="review-modal-component"
      >
        <div className="review-content">
          <div className="close-btn">
            {" "}
            <ReactSVG
              src={add}
              className="icon-close"
              onClick={() => this.closeModal()}
            />{" "}
          </div>
        </div>
      </Modal>
    );
  }
}
