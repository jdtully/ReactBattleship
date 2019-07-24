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
    var className = "square";

    const { x, y } = this.props;

    className = this.state.hover ? "hovered" : "square";
    debugger;
    //for (var i = 0; i < squares.length; i++) {
    //  if (x === squares[i].x && y === squares[i].y) {
    //    className = className + " hit";
    //  }
    //}

    //const style = { background: color };
    return (
      <button
        onMouseEnter={() => this.updateHoverState(true)}
        onMouseLeave={() => this.updateHoverState(false)}
        className={className}
      >
        {x + ":" + y}
        {/* TO DO */}
      </button>
    );
  }
}

export default Square;
