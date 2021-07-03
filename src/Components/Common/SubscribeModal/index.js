import React from 'react';
// import Modal from 'react-modal';
import { Modal } from 'react-bootstrap';
import add from '../../../Assets/Icon/add.svg';
import { ReactSVG } from 'react-svg'

import './SubscribeModal.scss';

export default class SubscribeModal extends React.Component {
    state = {
        email: '',
        isEmail: true
    };

    subscribe = (status) => {
        const { email } = this.state;
        if(status){
            let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            console.log("===regEmail.test(email)======", regEmail.test(email))
            if(regEmail.test(email)){
                this.props.subscribeConfirm(status, email);
                this.setState({
                    email: '',
                    isEmail: true
                });
            } else {
                this.setState({isEmail: false});
            }
        } else {
            this.props.subscribeConfirm(status, email);
        };
    };

    render() {
        const {isSubscribeModal, title, description, btnTxt} = this.props
        const {email, isEmail} = this.state
        return (
            <Modal show={isSubscribeModal} className="subscribe-modal-component">
                <div className="subscribe-content">
                    <div className="close-btn"> <ReactSVG src={ add } className='icon-close' onClick={ () => this.subscribe(false) }/> </div>
                    <div className="content-area v-r">
                        <div>
                            <h2>{title}</h2>
                            <h3>{description}</h3>
                            <p>EMAIL ADDRESS</p>
                            <input className={`textarea-note ${isEmail ? "" : "textarea-note-error"} `} value={email} onChange={e => this.setState({email: e.target.value})} />
                        </div>
                        <div className="subscribe-btn-area">
                            <div className="subscribe-btn" onClick={()=>this.subscribe(true)}>
                                {btnTxt}
                            </div>
                        </div>
                        <div className="subscribe-policy">By subscribing, you agree to our terms of service and privacy policy.</div>
                    </div>
                </div>
            </Modal>
        )
    };
};