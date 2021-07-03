import React from 'react';
import './TimeZone.scss';
import { ReactSVG } from 'react-svg'
import moment from 'moment-timezone';
import earth from '../../Assets/Icon/earth.svg';
import down from '../../Assets/Icon/arrow-down.svg'
import up from '../../Assets/Icon/arrow-up.svg'

export default class TimeZone extends React.Component {
    state = {
        showMenu: false,
        value: '',
        options: [],
        className: '',
        blured: false,
        search_value: '',
    }

    componentDidMount() {
        this.setState({
            value: this.props.value || moment.tz.guess(true),
            options: moment.tz.names(),
            className: this.props.className,
        })
    }

    showMenu = (event, flag) => {
        event.stopPropagation();
        if (this.state.blured) {
            this.setState({blured: false});
            return;
        }
        this.setState({
            showMenu: flag,
            search_value: ''
        })
        if (flag) {
            setTimeout(() => {
                this.input.focus();
            }, 300);
        }
    }

    blurContainer = () => {
        this.setState({showMenu: false, blured: true, search_value: ''});
        setTimeout(() => {
            this.setState({blured: false})
        }, 300);
    }

    selectItem = (item) => {
        this.setState({
            value: item,
            showMenu: false,
            search_value: ''
        })
        this.props.onChange(item);
    }

    render() {
        const { className, showMenu, value, options, search_value } = this.state;
        const now = moment().format();
        const filtered = options.filter(item => item.toLowerCase().includes(search_value.toLowerCase()));
        return (
            <div className={`timezone-component ${className || ''}`}>
                <div className="timezone-container" onClick={e => this.showMenu(e, !showMenu)} tabIndex={0}> 
                    <ReactSVG src={earth} className="svg-icon start-icon"/>
                    <p>{value} ({value ? moment.tz(now, value).format("hh:mm a") : ''})</p>
                    <ReactSVG src={showMenu ? up : down} className="svg-icon last-icon"/>
                </div>
                {showMenu && <div className="options" onBlur={e => this.blurContainer()}>
                    <input className="option-search" placeholder="Search..." value={search_value} onChange={e => this.setState({search_value: e.target.value})} ref={c => this.input = c}/>
                    <div className="option-list">
                        {filtered.map((item, index) => <div className="option" key={index} onMouseDown={e => this.selectItem(item)}>
                            <p>{item}</p>
                            <p>{item ? moment.tz(now, item).format("hh:mm a") : ''}</p>
                        </div>)}
                    </div>
                </div>}
            </div> 
        );
    }
}
