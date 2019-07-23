import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };

    this.updateHoverState = this.updateHoverState.bind(this);
  }

  updateHoverState(hover) {
    this.setState({ hover: hover });
  }
  render() {
    const color = this.state.hover ? "blue" : "white";
    const style = { background: color };
    const x = this.props.x;
    const y = this.props.y;

    return (
      <button
        onMouseEnter={() => this.updateHoverState(true)}
        onMouseLeave={() => this.updateHoverState(false)}
        className="square"
        style={style}
      >
        {x + ":" + y}
        {/* TODO */}
      </button>
    );
  }
}

export default Square;
