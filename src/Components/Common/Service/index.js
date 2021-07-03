import React from 'react';
import ReactDOM from 'react-dom';
import './Service.scss';
import bank from  '../../../Assets/Common/bank.png';

export default class Service extends React.Component {

    render() {
        const { data } = this.props;
        return (
            <div className="service-component">
                <div className="info-area">
                    {data.map((item, index)=> (
                        <div className="item-txt" key={index} onClick={()=>window.open(item.link)}>{item.name}</div>
                        ))}
                </div>
                {/* <div className="bg-dot custom-dot" alt="bgdot" /> */}
            </div>
        );
    }
}
