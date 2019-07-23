import React from "react";
import Square from "./Square";
import "./index.css";

class Board extends React.Component {
  render() {
    console.log(this.props);
    console.log("je je");
    const rows = [...Array(this.props.rows).keys()];
    const cols = [...Array(this.props.cols).keys()];

    var result = (
      <div className="board">
        {rows.map(y => (
          <div key={y}>
            {cols.map(x => (
              <Square key={x} x={x} y={y} />
            ))}
          </div>
        ))}
      </div>
    );

    return result;
  }
}

export default Board;
