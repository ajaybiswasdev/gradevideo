import React from 'react';
import './VideoModal.scss';
import { Modal } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import add from '../../../Assets/Icon/add.svg';
import playBtn from '../../../Assets/Icon/music-player-play.png';
import { ReactSVG } from 'react-svg'
import tutorVideo from "../../../Assets/Video/math.mp4";
import { PlayArrow } from '@material-ui/icons';

export default class VideoModal extends React.Component {
    state = {
        isOpen: false,
        info: {},
        playing: false,
    }

    closeModal = () => {
        this.props.closeVideoModal();
    }

    playVideo = (e) => {
        this.videoPlayer.play();
    }

    render() {
        const { info, playing } = this.state;
        const { isVideoModal } = this.props;
        return (
            <Modal show={isVideoModal} onHide={this.onHide} className="video-modal-component">
                <div className="video-content">
                    <div className="close-btn"> <ReactSVG src={ add } className='icon-close' onClick={ () => this.closeModal() }/> </div>
                    <div className="main-area">
                        {!playing && 
                             <div className="play-btn-bg" onClick={e => this.playVideo(e)}>
                                <PlayArrow className="play-icon"/>
                           </div>
                        }
                        <video width="100%" height="100%" 
                            preload="metadata" 
                            ref={c => this.videoPlayer = c} 
                            controls={playing} 
                            onPlay={e => this.setState({playing: true})} 
                            onEnded={e => this.setState({playing: false})}>
                            <source src={`${tutorVideo}#t=0.01`} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </Modal>
        );
    }
}