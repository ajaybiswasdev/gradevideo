import React from 'react';
import './InputBox.scss';
import { ReactSVG } from 'react-svg'

export default class InputBox extends React.Component {
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
            <div className={`inputbox-component ${className || ''}`}>
                <div className={`inputbox-container ${className}`} >
                    {icon && <ReactSVG src={icon} style={{fill: '#C5CBD7'}}/> }
                    <input 
                        type={type || 'text'} 
                        className={`search-text ${!icon ? 'no-icon' : ''}`} 
                        placeholder={placeholder} 
                        value={value} 
                        onChange={e => this.changeText(e)}
                    />
                </div>
                <div className="under-dot inputbox-bg" />
            </div> 
        );
    }
}
