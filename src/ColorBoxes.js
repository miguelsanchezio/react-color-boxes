import React, { Component } from 'react';
import ColorBox from "./ColorBox";
import './ColorBoxes.css';

class ColorBoxes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boxes: this.generateBoxes()
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  generateBoxes() {
    let newBoxes = [];
    for (let i = 0; i < this.props.numBoxes; i++) {
      let randomColor = this.props.colors[Math.floor(Math.random() * this.props.colors.length)];
      newBoxes.push({
        color: randomColor,
        index: i
      });
    }
    return newBoxes;
  }

  generateBox(color, index) {
    let newBoxes = this.state.boxes;
    let box = this.state.boxes[index];
    let newColor = this.props.colors[Math.floor(Math.random() * this.props.colors.length)];

    while(box.color === newColor) {
      newColor = this.props.colors[Math.floor(Math.random() * this.props.colors.length)];
    }

    box.color = newColor;
    newBoxes[index] = box;

    this.setState({boxes: newBoxes})
  }

  clickHandler(color, index) {
    this.generateBox(color, index);
  }

  render() {
    const colorBoxes = this.state.boxes.map(box => <ColorBox key={box.index}
                                                             clickHandler={this.clickHandler}
                                                             color={box.color}
                                                             index={box.index}/>
    );
    return (
      <div className="ColorBoxes">
        {colorBoxes}
      </div>
    );
  }
}

ColorBoxes.defaultProps = {
  numBoxes: 12,
  colors: ["410066", "7400b8", "6930c3", "5e60ce", "5390d9", "4ea8de", "48bfe3", "56cfe1", "64dfdf", "72efdd", "80ffdb", "C2FFEE"]
};

export default ColorBoxes;
