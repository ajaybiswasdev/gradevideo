import React from 'react';
import './GradeVideoPage.scss';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Helmet } from 'react-helmet';

import {
    VideoStartArea,
    VideoList,
} from "../../Components";

import {
    getChannelDetailAction,
} from "../../Redux/Actions";
import Helper from '../../Util/Helper';


class GradeVideoPage extends React.Component {

  componentDidMount() {
    Helper.showSpinner();
    this.props.getChannelDetailAction(this.props.match.params.channelName).then(() => {
        Helper.hideSpinner();
    });
  };

    render() {
        const { channelData } = this.props;
        
        return (
            <>
                {channelData && <div className="video-page">
                    <div className="video-container">
                        <VideoStartArea channelData={channelData}/>
                        <VideoList channelData={channelData}/>
                    </div>
                </div>}
            </>

        );
    }
}

const mapStateToProps = (state) => ({
    channelData: state.Core.channelData,
});

export default connect(mapStateToProps, {
    getChannelDetailAction
})(withRouter(GradeVideoPage));