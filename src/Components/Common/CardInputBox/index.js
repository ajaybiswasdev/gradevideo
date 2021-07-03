import React from 'react';
import './CardInputBox.scss';
import { ReactSVG } from 'react-svg'
import NumberFormat from 'react-number-format';

export default class CardInputBox extends React.Component {
    state = {
        value: ''
    }

    componentDidMount() {
        this.setState({
            value: this.props.value || ''
        })
    }

    changeText = (e) => {
        this.setState({
            value: e.currentTarget.value
        })
        this.props.onChange(e.currentTarget.value);
    }

    render() {
        const { className, icon, placeholder, type, maxLength } = this.props;
        const { value } = this.state;
        return (
            <div className={`card-inputbox-component ${className || ''}`}>
                <div className={`card-inputbox-container ${className}`} >
                    {icon && <ReactSVG src={icon} style={{fill: '#C5CBD7'}}/> }                   
                    <NumberFormat 
                        placeholder="Card Number"
                        onChange={e => this.changeText(e)} 
                        format="#### #### #### ####" 
                        mask="_"
                        value={value} 
                        className="card-input-container"
                    />
                </div>
                <div className="under-dot card-inputbox-bg" />
            </div> 
        );
    }
}
