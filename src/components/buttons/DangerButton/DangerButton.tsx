import React, { Component } from 'react';
import Button from '../Button/Button';

import './DangerButton.scss';

class DangerButton extends Button {

  readonly state = {
    className: 'btn btn-danger'
  };

  render() {
    return <button className={this.state.className}
                   onClick={this.props.onClick}>
      {this.props.children}
    </button>
  }
}

export default DangerButton;
