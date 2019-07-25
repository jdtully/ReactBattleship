import React from "react";
import "./index.css";

class Square extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      clicked: false
    };

    this.updateHoverState = this.updateHoverState.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  updateHoverState(hover) {
    this.setState({ hover: hover });
  }

  clickHandler() {
    this.setState({ clicked: true });
    console.log("clickHandler");
  }
  render() {
    var className = "square";

    const { x, y } = this.props;

    className = this.state.hover ? "hovered" : "square";

    return (
      <button
        onMouseEnter={() => this.updateHoverState(true)}
        onMouseLeave={() => this.updateHoverState(false)}
        onClick={this.clickHandler}
        className={className}
      >
        {x + ":" + y}
        {/* TO DO */}
      </button>
    );
  }
}

export default Square;
