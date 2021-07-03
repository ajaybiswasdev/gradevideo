import React from 'react';
import './TutorModal.scss';
import { Modal } from 'react-bootstrap';
import { toggleTutorModal } from '../../../Redux/Actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import add from '../../../Assets/Common/add.svg';
import { ReactSVG } from 'react-svg'

class TutorModal extends React.Component {
    state = {
        isOpen: false,
        info: {},
        rect: {}
    }

    static getDerivedStateFromProps(props, state) {
        return {
            isOpen: props.isOpen,
            info: props.info || {},
            rect: props.rect || {}
        }
    }

    closeModal = () => {
        this.props.toggleTutorModal(false);
    }

    onHide = () => {

    }

    render() {
        const { isOpen, info, rect } = this.state;

        let tutorContentStyle = {
            left: rect.x,
            top: rect.y
        };
        let contentAreaStyle = {
            width: '340px',
            height: rect.height
        };

        if (rect.y < 100) {
            tutorContentStyle.top = 100;
        } else if (rect.y + rect.height > window.outerHeight) {
            tutorContentStyle.top = window.outerHeight - rect.height - 10;
        }

        let photoEndX = rect.x + rect.width + 340;
        if (photoEndX > window.outerWidth) {
            let photoStartX = rect.x - 340;
            if (photoStartX >= 0) {
                tutorContentStyle.left = photoStartX;
            } else {
                tutorContentStyle.flexDirection = 'column';
                contentAreaStyle.width = rect.width;

                let newHeight = rect.height * 0.7;
                contentAreaStyle.height = newHeight;
                
                if (rect.y + rect.height + newHeight > window.outerHeight) {
                    tutorContentStyle.top = window.outerHeight - rect.height - newHeight - 10;
                }
            }
        }

        return (
            <Modal show={isOpen} onHide={this.onHide} className="tutor-modal-component" animation={false}>
                <div className="tutor-content" style={{...tutorContentStyle}}>
                    <div className="close-btn"> <ReactSVG src={ add } className='icon-close' onClick={ () => this.closeModal() }/> </div>
                    <div className="photo-area" style={{width: rect.width, height: rect.height}}>
                        <div className="info-area tutor-photo">
                            <img src={info.picture} alt="avatar" className="sub-info" />
                        </div>
                        <div className="info-area">
                            <div className="sub-info tutor-info">
                                <div className="name">{info.name}</div>
                                <div className="sub-text">{info.profile_title}</div>
                            </div>
                        </div>
                    </div>
                    <div className="content-area" style={{...contentAreaStyle}}>
                        {info.about_me}
                    </div>
                </div>
            </Modal>
        );
    }
}

function mapStateToProps(state) {
    return {
        isOpen: state.Tutor.isOpen,
        info: state.Tutor.info,
        rect: state.Tutor.rect
    }
}
  
export default connect(mapStateToProps, { toggleTutorModal })(withRouter(TutorModal));
