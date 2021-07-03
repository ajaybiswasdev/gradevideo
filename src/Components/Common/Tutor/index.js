import React from 'react';
import ReactDOM from 'react-dom';
import './Tutor.scss';
import bank from  '../../../Assets/Common/bank.png';

export default class Tutor extends React.Component {
    getComponentRect = () => {
        var rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
        if (this.props.onClick) {
            this.props.onClick(rect);
        }
    }
//     { name: '1. Aswathy A.', photo: tutor1, job: 'Graduate CS Student at UTA', school: 'University of Texas in Arlington', description: "I am a Bachelor's Degree student at University of Texas at Arlington."},

    render() {
        const { tutor_info, className, team } = this.props;
        return (
            <div className={`tutor-component ${className}`} onClick={this.getComponentRect}>
                <div className="info-area">
                    <img src={team ? tutor_info.picture : `${process.env.REACT_APP_IMAGE_DOMAIN}${tutor_info.picture}`} alt="avatar" className="sub-info tutor-avatar" />
                </div>
                <div className="info-area">
                    <div className={`${team ? "team-sub-info team-tutor-info" : "sub-info tutor-info"}`}>
                        <div className="name">{tutor_info.name}</div>
                        <div className="sub-text">{tutor_info.profile_title}</div>
                        {(tutor_info.school && tutor_info.school.length > 0) && 
                            <div className="school">
                                <img src={bank} alt="bank" />
                                <div className="sub-text">{tutor_info.school}</div>
                            </div>
                        }
                        {(tutor_info.about_me && tutor_info.about_me.length > 0) && 
                            <div className={team? "team-description" : "tutor-description"}>{tutor_info.about_me}</div>
                        }
                    </div>
                </div>
                <div className="bg-dot custom-dot" alt="bgdot" />
            </div>
        );
    }
}
