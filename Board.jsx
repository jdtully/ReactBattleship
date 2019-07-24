import React from "react";
import Square from "./Square";
import "./index.css";

const squares = [
  { x: 4, y: 5 },
  { x: 4, y: 6 },
  { x: 4, y: 7 },
  { x: 4, y: 8 },
  { x: 4, y: 9 }
];

class Board extends React.Component {
  render() {
    console.log(this.props);
    console.log("je je");
    const rows = [...Array(this.props.rows).keys()];
    const cols = [...Array(this.props.cols).keys()];
    var hovered = false;
    for (var i = 0; i < squares.length; i++) {
      hovered = true;
    }
    var result = (
      <div className="board">
        {rows.map(y => (
          <div key={y}>
            {cols.map(x => (
              <Square
                hovered={hovered}
                occupied={false}
                shot={false}
                hit={false}
                squares={squares}
                key={x}
                x={x}
                y={y}
              />
            ))}
          </div>
        ))}
      </div>
    );

    return result;
  }
}

export default Board;
