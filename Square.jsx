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
    /*const x = this.props.x;
    const y = this.props.y;*/
    const { x, y, squares } = this.props;
    var color = this.state.hover ? "blue" : "white";
    debugger;
    for (var i = 0; i < squares.length; i++) {
      if (x === squares[i].x && y === squares[i].y) {
        color = "orange";
      }
    }

    const style = { background: color };
    return (
      <button
        occupied={false}
        shot={false}
        hit={false}
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
