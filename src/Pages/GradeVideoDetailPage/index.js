import React from 'react';
import './GradeVideoDetailPage.scss';
import {
    VideoDetail,
} from "../../Components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Helmet } from 'react-helmet';

import {
    getVideoDetailAction,
} from "../../Redux/Actions";

class GradeVideoDetailPage extends React.Component {

    state = {

    };

    componentDidMount() {        
        this.props.getVideoDetailAction(this.props.match.params.id);
    };

    render() {
        const {videoDetailData} = this.props;
        console.log("===videoDetailData===", videoDetailData)
        return (
            <>
                {videoDetailData && <div className="video-detail-component">
                    <VideoDetail videoDetailData={videoDetailData}/>
                </div>}
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    videoDetailData: state.Core.videoDetailData,
});

export default connect(mapStateToProps, {
    getVideoDetailAction
})(withRouter(GradeVideoDetailPage));