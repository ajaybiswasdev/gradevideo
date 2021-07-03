import React from 'react';
import './CheckBox.scss';
import { ReactSVG } from 'react-svg';
import tick from '../../../Assets/Common/tick.svg';

export default class CheckBox extends React.Component {
    state = {
        checked: this.props.value,
    }

    onChange = () => {
        this.props.onChange(!this.state.checked);
        this.setState({
            checked: !this.state.checked,
        })
    }

    render() {
        const { className, width } = this.props;
        const { checked } = this.state;

        return (
            <div className={`checkbox-component ${className || ''} `} style={{minWidth: width || '24px', maxWidth: width || '24px', height: width || '24px'}} onClick={this.onChange}>
                {checked && <ReactSVG src={tick} className="svg-icon" beforeInjection={svg => { svg.setAttribute('style', 'width: 100%');  }}/> }
            </div>
        )
    };
};