import React from 'react';
import './Toggle.scss';

export default class Toggle extends React.Component {
  state = {
    value: this.props.value,
  }

  onChange = () => {
    if (this.props.disable) return;

    this.props.onChange(!this.state.value);
    this.setState({
      value: !this.state.value,
    })
  }

  render() {
    const {
      className,
      disable
    } = this.props;

    const {value} = this.state;

    return (
      <div className={`toggle-component ${className || ''} ${disable? 'disable': ''} ${value? '': 'off'}`} onClick={this.onChange}>
        <div className='handle'></div>
      </div>
    )
  };
};