import React, { useEffect, useState } from 'react';
import './VideoDetail.scss';
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Helper from '../../../Util/Helper';
import { NavLink, withRouter } from "react-router-dom";

import ceoPhoto from "../../../Assets/Home/ceo-photo.jpg";
import { PlayArrow } from '@material-ui/icons';
import { VideoModal, SubscribeModal } from "../../../Components";

import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
} from "react-share";
import Disqus from "disqus-react"
import valFacebookIcon from "../../../Assets/Home/val-facebook.png";
import valLinkedIn from "../../../Assets/Home/valLinkedIn.png";
import valTwitter from "../../../Assets/Home/valTwitter.png";
import {
    tvSubscribeAction,
  } from "../../../Redux/Actions";

import loadVideoJs from './load';  
function innerFunc(item) {
    return {__html: item}
}
function VideoJsLoad (props) {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      loadVideoJs(() => {
        setLoaded(true);
      });
    });
    return null;
  }

class VideoDetail extends React.Component {

    state = {        
        embed_code: '',
        videoembed_code: '',
        videoTitle: '',
        videoDescription: '',
        playing: false,
        submit_email: '',
        is_submit_email: true,
        isSubscribeModal: false,
        pageString:"",
        ownpagedata:null,
        videopanShow:false,
    };

    componentDidMount = async () => {
        const {videoDetailData} = this.props;
        const {pageString} = this.state;
        if(pageString === ""){
            this.setState({
                embed_code: videoDetailData.embed_code,
                videoTitle: videoDetailData.name,
                videoDescription: videoDetailData.description,
                videopanShow: true
            });
            this.jsLoad();
        }

            // const script = document.createElement("script");
            // script.src = "https://muse.ai/static/js/embed-player.min.js";
            // script.async = true;
            // script.id = 'videojs';
            // if(!document.querySelectorAll('script[src*="https://muse.ai/static/js/embed-player.min.js"]').length){
            //     document.body.appendChild(script);
            // }
        console.log('>>> 1 :', videoDetailData);
    };
    

    componentDidUpdate = async (prevProps) => {
       console.log("===prevProps=====", prevProps)
       
       setTimeout(function() {
           
            
            console.log('>>> 2 :');
            
            // document.getElementsByTagName("body")[0].setAttribute("id", "forvideoId");
            // const sctag = document.querySelectorAll("#forvideoId #dsq-embed-scr");
            // const sctag1 = document.getElementById('videojs');
            // console.log('sctag', sctag)
            // sctag1.nextElementSibling.removeAttribute("src");
            // sctag1.nextElementSibling.removeAttribute("id");
            
        
            

        }.bind(this), 2000)
    };

    
    jsLoad =() => {
        const script = document.createElement("script");
        script.src = "https://muse.ai/static/js/embed-player.min.js";
        script.async = true;
        script.id = 'videojs';
        if(!document.querySelectorAll('script[src*="https://muse.ai/static/js/embed-player.min.js"]').length){
            document.body.appendChild(script);
        }
    } 

    playVideo = (e) => {
        this.videoPlayer.play();
    };

    listPlayVideo = (data, e) => {
        

        if(e === "childpage"){
            this.setState({
                embed_code: data.embed_code,
                videoTitle: data.name,
                videoDescription: data.description,
                pageString: e,
                videoembed_code: data.embed_code,
                ownpagedata: data
            });
            this.props.history.push(`/gradeVideo/${data.id}`);
            this.jsLoad();
        }
            
            
        
    };

    subscribe = () => {
        this.setState({isSubscribeModal: true});
    };
    
    subscribeConfirm = (status, email) => {    
        this.setState({isSubscribeModal: false});
        if(status){
            Helper.showSpinner();
        
            const formData = new FormData()
            formData.append('email', email);
            formData.append('tag', this.props.videoDetailData.subscribe_tag);
        
            this.props.tvSubscribeAction(formData).then(()=>{
                const { subscribeRes, subscribeErr } = this.props;
                
                if(subscribeRes){
                    toast(subscribeRes);
                } else {
                    toast("Error!");
                };
                Helper.hideSpinner();
            });
        };
    };

    submitSubscribe = () => {
        let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const { submit_email } = this.state;

        if(regEmail.test(submit_email)){
            this.setState({is_submit_email: true});
            this.subscribeConfirm(true, submit_email)
        } else {
            this.setState({is_submit_email: false});
        };
    };



    render() {
        const ShareURL = process.env.REACT_APP_PUBLIC_DOMAIN + window.location.pathname;        
        const {videoTitle, videoDescription, playing, submit_email, embed_code, is_submit_email,videoembed_code, videopanShow} = this.state;
        const {videoDetailData} = this.props;

        const disqusShortname = "GradeGetter"
        const disqusConfig = {
            url: ShareURL,
            identifier: embed_code,
            title: videoTitle
        }
        console.log('==== videoDeta  ====', videopanShow)
        console.log('=====',)
        

        return (
            <div className="video-detail-page">
                <div className="row">
                    <div className="col-lg-9 ">
                         
                    {videopanShow ? 
                    (
                        <>
                        {/* <VideoJsLoad /> */}
                        <div className="muse-video-player" data-video={embed_code} data-width="1200" data-height="600" data-links="0" data-logo="https://api.gradegetter.com/img/full_logo.png"></div>
                        </>
                    ) :null}
                    </div>
                    <div className="col-lg-3">
                        <div className="video-submit  text-center">
                            <h2>{videoDetailData.subscribe_message}</h2>
                            <img src={videoDetailData.subscribe_image} alt="photo" className="photo"/>
                            <div className="submit-container">
                                <div className="submit-note">Where should we email the note to ?</div>
                                <input className={`email-input ${is_submit_email? "" : "email-input-error"}`}
                                    placeholder="Email"
                                    value={submit_email}
                                    onChange= {(event)=>this.setState({submit_email: event.target.value})}
                                />
                                <div className="submit-btn" onClick={()=>this.submitSubscribe()}>Submit</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-9 ">
                        <div className="video-title">
                            {videoTitle}
                        </div>
                        <div className="video-share-subscribe">
                            <div className="video-share">
                                <div className="share-description">Share</div>
                                <FacebookShareButton url={ShareURL} className="share-btn" >
                                    <img src={valFacebookIcon} alt="facebook" />
                                </FacebookShareButton>
                                <LinkedinShareButton url={ShareURL} className="share-btn" >
                                    <img src={valLinkedIn} alt="linkedin" />
                                </LinkedinShareButton>
                                <TwitterShareButton url={ShareURL} className="share-btn" >
                                    <img src={valTwitter} alt="twitter" />
                                </TwitterShareButton>
                            </div>
                            <div className="subscribe-btn"
                                onClick={()=>this.subscribe()}>
                                SUSCRIBED
                            </div>
                        </div>
                        <div className="video-description">
                            {videoDescription}
                        </div>
                        <Disqus.DiscussionEmbed
                            shortname={disqusShortname}
                            config={disqusConfig}
                        />
                    </div>
                    <div className="col-lg-3 ">
                        <div className="related-videos-container  text-center">
                            <div className="related-video-head-title">
                                RELATED VIDEOS
                            </div>
                            {(videoDetailData.related_videos && videoDetailData.related_videos.length > 0) && videoDetailData.related_videos.map((data, index)=> (
                                <div className="col-12 related-video-list" key={index}>
                                    <img src={data.meta_image} alt="video" className="video-image"/>
                                    
                                    <div className="play-btn-bg" onClick={e => this.listPlayVideo(data, "childpage")}>
                                        <PlayArrow className="play-icon"/>
                                    </div>
                                    {/* <video width="100%" height="100%" 
                                        key={data.video}
                                        preload="metadata" >
                                        <source src={`${data.video}#t=0.01`} type="video/mp4" />
                                    </video> */}
                                    <div className="related-video-title">
                                        {data.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <SubscribeModal
                    isSubscribeModal={this.state.isSubscribeModal}
                    subscribeConfirm={(e, r) => this.subscribeConfirm(e, r)}
                    title="Get expert scaling strategies delivered to your inbox weekly 👇"
                    btnTxt="Subscribe for updates"
                />
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
  })(withRouter(VideoDetail));