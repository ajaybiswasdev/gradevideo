import React from 'react';
import './RadioButton.scss';

export default class RadioButton extends React.Component {
    state = {
        value: null,
        price: null,
    }

    static getDerivedStateFromProps(props, state) {
        return {
            value: props.value,
            price: props.price
        }
    }

    render() {
        const { className, onClick } = this.props;
        const { value, price } = this.state;
        return (
            <div className={`radiobutton-component ${className || ''} v-c`} onClick={onClick}>
                <div className="radio-circle v-r v-c h-c">
                    {(value === price && value !== null) && <div className="inner-circle" />}
                </div>
                <p className="radio-value">{value}</p>
            </div> 
        );
    }
}