import React from 'react';
import ReactDOM from 'react-dom';
import './LocationList.scss';
import bank from  '../../../Assets/Common/bank.png';

export default class LocationList extends React.Component {

    render() {
        const { data } = this.props;
        return (
            <div className="location-list-component">
                <div className="info-area">
                    {data.map((item, index)=> (
                        <div className="item" key={index} onClick={()=>window.open(item.link)}>{item.name}</div>
                        ))}
                </div>
            </div>
        );
    }
}
