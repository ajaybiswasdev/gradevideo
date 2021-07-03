import React from 'react';
import './Avatar.scss';

export default class Avatar extends React.Component {
    getInitial = (name) => {
        if (!name) return 'AL';
        const splited = name.split(' ');
        return splited[0][0] + (splited[1].length > 0 ? splited[1][0] : splited[0][1]);
    }

    render() {
        const { className, info } = this.props;

        return (
            <div className={`avatar-component ${info.photo ? 'has-photo' : ''} ${className || ''}`}>
                {info.photo ? <img src={info.photo} alt="avatar" /> : <p>{this.getInitial(info.name)}</p>}
            </div>
        )
    };
};