import React, { Component } from 'react';

import './Button.scss';

class Button extends Component<any, any> {

  readonly state = {
    className: this.props.className || 'btn'
  };

  render() {
    return (
      <button className={this.props.className}
              onClick={this.props.onClick}>
        {this.props.children}
      </button>
    ) 
  }
}
export default Button;
