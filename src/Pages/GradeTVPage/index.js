import React from 'react';
import './GradeTVPage.scss';
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { Helmet } from 'react-helmet';
import {
    TVStartArea,
    Channels,
    LatestNews,
    Watch,
    Listen,
    Read,
    Ebook,
    Subscribe,
} from "../../Components";

import {
    getGradeTvDataAction,
} from "../../Redux/Actions";
import Helper from '../../Util/Helper';
import _ from 'lodash'

class GradeTVPage extends React.Component { 

    componentDidMount() {
        Helper.showSpinner();
        this.props.getGradeTvDataAction().then(()=>{
            Helper.hideSpinner();
        });
    };
    
    render() {
        const { tvDatas } = this.props;        

        return (
            <>
                {tvDatas && <div className="tv-page">
                    <div className="tv-container">
                        <TVStartArea tvDatas={tvDatas}/>
                        <Channels channels={tvDatas.channels} />
                        <LatestNews news={tvDatas.news} testimonials={tvDatas.testimonials}/>
                        <Subscribe />
                    </div>
                </div>}
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    tvDatas: state.Core.tvDatas,
});

export default connect(mapStateToProps, {
    getGradeTvDataAction
})(withRouter(GradeTVPage));