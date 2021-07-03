import React from "react";
import "./VideoCarousel.scss";
import Loadable from "@loadable/component";
import Media from "react-media";
import { CarouselLeftButton, CarouselRightButton } from "../../../Constant";
import { VideoItem } from "../../../Components";
import img1 from "../../../Assets/AboutUs/img1.png";
import img2 from "../../../Assets/AboutUs/img2.png";
import img3 from "../../../Assets/AboutUs/img3.png";

const OwlCarousel = Loadable(() => import("react-owl-carousel"));

const SmallVideos = [
    {title: "PROTECT THE HUSTLE", description: 'HUBSpot CEO Brian Halligan on the Difficulty of Scaling Up HUBSpot CEO Brian Halligan on the Difficulty of Scaling Up', picture: img1, rule: 'SO1 EO2', details: 'Welcome back for episode two of Tradeoffs, the show where Hiten Shah...'},
    {title: 'REVOPS AND HOPS', description: "Building a Revops Function With Go Nimbly's Ceo Jason Reich", picture: img2, rule: 'SO1 EO2', details: 'Welcome back for episode two of Tradeoffs, the show where Hiten Shah...'},
    {title: 'PROFITWELL REPORT', description: 'Annual Plans Reduce Churn Dramatically, Data Finds', picture: img3, rule: 'SO1 EO2', details: 'Welcome back for episode two of Tradeoffs, the show where Hiten Shah...'},
    {title: 'TRADEOFFS', description: 'The Rise, Fall, And Future of Evernote', picture: img1, rule: 'SO1 EO2', details: 'Welcome back for episode two of Tradeoffs, the show where Hiten Shah...'},
    {title: "PROTECT THE HUSTLE", description: 'HUBSpot CEO Brian Halligan on the Difficulty of Scaling Up', picture: img1, rule: 'SO1 EO2', details: 'Welcome back for episode two of Tradeoffs, the show where Hiten Shah...'},
    {title: 'REVOPS AND HOPS', description: "Building a Revops Function With Go Nimbly's Ceo Jason Reich", picture: img2, rule: 'SO1 EO2', details: 'Welcome back for episode two of Tradeoffs, the show where Hiten Shah...'},
    {title: 'PROFITWELL REPORT', description: 'Annual Plans Reduce Churn Dramatically, Data Finds', picture: img3, rule: 'SO1 EO2', details: 'Welcome back for episode two of Tradeoffs, the show where Hiten Shah...'},
    {title: 'TRADEOFFS', description: 'The Rise, Fall, And Future of Evernote', picture: img1, rule: 'SO1 EO2', details: 'Welcome back for episode two of Tradeoffs, the show where Hiten Shah...'},
]

export default class VideoCarousel extends React.Component {

    state = {
    
    };

    render() {
        const { folerList } = this.props;
        return (
            <div className="video-carousel-component">
                <Media
                    queries={{
                        lg: "(min-width: 1200px)",
                        md: "(min-width: 992px) and (max-width: 1199px)",
                        // sm: "(min-width: 768px) and (max-width: 991px)",
                        // normal: "(max-width: 767px)",
                    }}
                    >       
                    {(matches) => (
                        <OwlCarousel
                        className="owl-theme"
                        nav
                        stagePadding={
                            matches.lg ? 0 : matches.md ? 0 : matches.sm ? 0 : 15
                        }
                        margin={
                            matches.lg ? 10 : matches.md ? 10 : matches.sm ? 45 : 20
                        }
                        items={matches.lg ? 3 : matches.md ? 2 : 1}
                        dots={false}
                        navText={[CarouselLeftButton, CarouselRightButton]}
                        >
                        {folerList.map((item, index) => {
                            return <VideoItem key={index} item={item}/>;
                        })}
                        </OwlCarousel>
                    )}
                </Media>
            </div>
        );
    }
}
