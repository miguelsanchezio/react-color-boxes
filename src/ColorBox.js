import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
  render() {
    return (
      <div
        onClick={() => this.props.clickHandler(this.props.color, this.props.index)}
        className="ColorBox"
        style={{backgroundColor: `#${this.props.color}`}}>
        #{this.props.color}
      </div>
    );
  }
}

export default ColorBox;
