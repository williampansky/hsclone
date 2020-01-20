import React, { PureComponent } from 'react';

class Box extends PureComponent {
  render() {
    const size = 100;
    const x = this.props.x - size / 2;
    const y = this.props.y - size / 2;
    return (
      <img
        alt=""
        className="sprite house01"
        src="assets/house01.png"
        style={{
          position: 'absolute',
          left: x + 30,
          top: y + 20,
          zIndex: 1
        }}
      />
    );
  }
}

export { Box };
