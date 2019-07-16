import React from "react";
import Square from "./Square";

class Board extends React.Component {
  render() {
    console.log(this.props);
    console.log("je je");
    const status = "Next player: X";
    const rows = [...Array(this.props.rows).keys()];
    const cols = [...Array(this.props.cols).keys()];

    var result = (
      <div>
        <div className="status">{status}</div>
        {rows.map(y => (
          <div>
            {cols.map(x => (
              <Square data-x={x} data-y={y} />
            ))}
          </div>
        ))}
      </div>
    );

    return result;
  }
}

export default Board;
