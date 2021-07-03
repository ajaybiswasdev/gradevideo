import React from 'react';
import './Accordion.scss';
import add from '../../../Assets/Common/add.svg';
import { ReactSVG } from 'react-svg'

export default class Accordion extends React.Component {

    state = {
        isOpen: false
    }

    toggleAccordion = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const { className, title, content, icon } = this.props;
        const { isOpen } = this.state;
        return (
            <div className={`accordion-component ${className}`}>
                <div className="title-area" onClick={ () => this.toggleAccordion() }>
                    <div className="accordion-title">{title}</div>
                    <ReactSVG src={ icon || add } className={`icon ${ isOpen ? icon ? 'has-icon-close' : 'icon-close' : icon ? 'has-icon' : 'icon-open' }`}/>
                </div>
                {content.map((item, index)=>(
                    <div className={`accordion-content ${isOpen ? 'active' : ''}`} key={index}>{item}</div>
                ))}
            </div>
        );
    }
}
