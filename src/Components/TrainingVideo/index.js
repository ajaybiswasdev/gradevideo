import React from 'react';
import './TrainingVideo.scss';
import arrowLeft from '../../Assets/Icon/arrow-left.png';
import arrowRight from '../../Assets/Icon/arrow-right.png';
import playBtn from '../../Assets/Icon/music-player-play.png';
import { RadioButton } from '../../Components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Sections } from './Sections';
import _ from 'lodash'
import { toast } from "react-toastify";
import {
    tutorProfileUpdateAction,
} from "../../Redux/Actions";
import Helper from '../../Util/Helper';
import { PlayArrow } from '@material-ui/icons';


const SectionIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const MoveDistance = 55;

class TrainingVideo extends React.Component {
    state = {
        section_id: 1,
        playing: false,
        SectionData : Sections,
        answers: 0,        
    }

    constructor(props) {
        super(props);
        this.sectionContainer = React.createRef();
    }

    componentDidUpdate(prevProps, PrevState) {
        const {training_status} = this.props;
        if(prevProps.training_status !== training_status){  
            if(training_status === 11){
                this.setState({section_id: 11})
            } else {
                this.setState({section_id: training_status + 1})
            }
            this.state.SectionData.map((data, index)=>{
                if(data.id <= training_status){
                    data.submitted = true;                          
                }
                this.setState({SectionData: this.state.SectionData});
            })
        }
    }

    showArrow = (direction) => {
        return this.sectionContainer.current && (direction === 'left' ?  this.sectionContainer.current.scrollLeft > 0 : (this.sectionContainer.current.offsetWidth + this.sectionContainer.current.scrollLeft) < this.sectionContainer.current.scrollWidth);
    }

    scrollContainer = (direction) => {
        if (direction === 'left') {
            this.sectionContainer.current.scrollTo({left: this.sectionContainer.current.scrollLeft - Math.min(this.sectionContainer.current.scrollLeft, MoveDistance), behavior: 'smooth'})
        } else {
            let remainDistance = this.sectionContainer.current.scrollWidth - (this.sectionContainer.current.offsetWidth + this.sectionContainer.current.scrollLeft);
            this.sectionContainer.current.scrollTo({left: this.sectionContainer.current.scrollLeft + Math.min(remainDistance, MoveDistance), behavior: 'smooth'})
        }
    }

    selectIndex = (item) => {
        const {SectionData} = this.state
        if(item === 1 || item > 1 && _.find(SectionData, {id: item-1}).submitted){
            this.setState({section_id: item, playing: false})
        }
    }

    playVideo = (e) => {
        this.videoPlayer.play();
        // this.setState({playing: true})
    }

    setAnswer = (qBlockIndex, question) => {
        let { section_id, SectionData } = this.state;
        let sectionIndex = SectionData.findIndex(temp => temp.id === section_id);
        let CurrentSection = SectionData[sectionIndex];
        CurrentSection.questions[qBlockIndex].answer = question;
        this.setState({ SectionData });
    }

    showQuestions = () => {
        let { SectionData, section_id } = this.state;

        const sectionIndex = SectionData.findIndex(temp => temp.id === section_id);
        SectionData[sectionIndex].show_questions = true;
        this.setState({
            playing: false,
            SectionData,
        })
        if(!SectionData[0].submitted && section_id === 1 ){
            this.submit(1);
        }
        if(SectionData[0].submitted && section_id === 1){
            this.setState({section_id: 2})
        }
        if(!SectionData[10].submitted && section_id === 11){
            this.submit(11);
        } 
        if(section_id > 1 && section_id <11 && SectionData[section_id-1].submitted){
            this.setState({section_id: section_id+1})
        }
    }

    doSubmitAnswers = () => {
        const { SectionData, section_id } = this.state;
        let count = 0;
        for (let item of SectionData) {
            for (let question of item.questions) {
                if (question.answer.length > 0) count++;
            }
        }
        this.setState({ answers: count});
        
        const wrong_answer_index = SectionData[section_id-1].questions.findIndex(temp => temp.answer !== temp.correct_answer);
        if(wrong_answer_index >= 0){
            toast(`You have got wrong answer about ${wrong_answer_index+ 1}`)
        } else {
            this.submit(section_id);
        }
    }

    submit = (section_id) => {
        Helper.showSpinner();

        const { SectionData } = this.state;

        const formData = new FormData();  
        formData.append('training_status', section_id);

        this.props.tutorProfileUpdateAction(formData).then(()=>{
            Helper.hideSpinner();

            const {tutorProfileUpdateStatus, tutorProfileUpdateErr} = this.props;
            this.props.updateTrainingStatus(section_id);
            if(tutorProfileUpdateStatus){
                SectionData[section_id-1].submitted = true;
                this.setState(SectionData);
                if(section_id === 11){
                    toast("Thank you for completing training")
                } else {
                    this.setState({section_id: section_id +1});
                    toast("Success! You can watch next video.")
                }
            } else {
                toast(tutorProfileUpdateErr)
            }
        })
    }

    render() {
        const { answers, section_id, playing, SectionData } = this.state;
        const sectionIndex = SectionData.findIndex(temp => temp.id === section_id);
        const CurrentSection = SectionData[sectionIndex];
        return (
            <div className="training-page v-r v-c">
                <div className="sub-section v-r">
                    <h3>{CurrentSection.title}</h3>
                    <p>{CurrentSection.description}</p>
                    <div className="section-index-row v-c">
                        {this.showArrow('left') && <div className="arrow-btn v-r h-c v-c" onClick={e => this.scrollContainer('left')}><img src={arrowLeft} alt="arrow" /></div>}
                        <div className="section-index-container v-c" ref={this.sectionContainer}>
                            {SectionIndexes.map((item, index) => <div className={`section-index v-r v-c h-c ${section_id === item ? 'activated' : ''}`} key={index} onClick={e => this.selectIndex(item)}>
                                {item}
                            </div>)}
                        </div>
                        {/* {this.showArrow('right') && <div className="arrow-btn v-r h-c v-c" onClick={e => this.scrollContainer('right')}><img src={arrowRight} alt="arrow" /></div>} */}
                    </div>
                    <div className="section-content v-r">
                        <div className="video-area">
                            <div className="player-area">
                                {!playing && 
                                    <div className="play-btn" onClick={e => this.playVideo(e)}>
                                        <PlayArrow className="play-icon"/>
                                    </div>
                                }
                                <video width="100%" height="100%" key={CurrentSection.video_src} preload="metadata" ref={c => this.videoPlayer = c} controls={playing} onPlay={e => this.setState({playing: true})} onEnded={e => this.showQuestions()}>
                                    <source src={`${CurrentSection.video_src}#t=0.01`} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <p style={{color: '#7B88A0'}}>{section_id === 1 || section_id === 11 || CurrentSection.submitted? "" : "The questions will appear after you have watched the video."}</p>
                        {(CurrentSection.submitted && section_id === 11) && <h3 className="mt-5">Thank you for completing training</h3>}
                        {(CurrentSection.show_questions && section_id !== 1 && section_id !== 11 && !CurrentSection.submitted) && <React.Fragment>
                            <div className="question-area v-r">
                                {CurrentSection.questions.map((qBlock, qBlockIndex) => <div className="question-section v-r" key={qBlockIndex}>
                                    <h4>{qBlockIndex+1}) {qBlock.main}</h4>
                                    {qBlock.sub.map((question, questionIndex) => <RadioButton value={question} price={qBlock.answer} className="sub-question" key={questionIndex} onClick={e => this.setAnswer(qBlockIndex, question)}/>)}
                                </div>)}
                            </div>
                            {_.find(CurrentSection.questions, {answer: ''})? 
                                <button className="btn-2 ">Submit</button>
                                :
                                <button className="btn-2 primary-btn" onClick={e => this.doSubmitAnswers(CurrentSection)}>Submit</button>
                            }
                        </React.Fragment>}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    myProfileInfo: state.Core.myProfileInfo,
    tutorProfileUpdateStatus: state.Auth.tutorProfileUpdateStatus,
    tutorProfileUpdateErr: state.Auth.tutorProfileUpdateErr,
});

export default connect(mapStateToProps, {
    tutorProfileUpdateAction
})(withRouter(TrainingVideo));