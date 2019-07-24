import React from "react";
import Square from "./Square";
import "./index.css";

class Board extends React.Component {
  render() {
    console.log(this.props);

    //const { x, y } = this.props;
    const rows = [...Array(this.props.rows).keys()];
    const cols = [...Array(this.props.cols).keys()];
    const squares = [
      { x: 0, y: 0 },
      { x: 4, y: 6 },
      { x: 4, y: 7 },
      { x: 4, y: 8 },
      { x: 4, y: 9 }
    ];
    var hovered = false;
    var result = (
      <div className="board">
        {rows.map(y => (
          <div key={y}>
            {cols.map(x => {
              var occupied = squares.some(
                square => x === square.x && y === square.y
              );
              return (
                <Square
                  hovered={hovered}
                  occupied={occupied}
                  shot={false}
                  hit={false}
                  squares={squares}
                  key={x}
                  x={x}
                  y={y}
                />
              );
            })}
          </div>
        ))}
      </div>
    );
    return result;
  }
}

export default Board;
