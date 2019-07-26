import React from "react";
import Square from "./Square";
import "./index.css";

class Board extends React.Component {
  render() {
    console.log(this.props);
    console.log("testing");

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
    //var hovered = false;
    var shot = false;
    var hit = false;
    var occupied = false;
    var result = (
      <div className="board">
        {rows.map(y => (
          <div key={y}>
            {cols.map(x => {
              occupied = squares.some(
                square => x === square.x && y === square.y
              );
              return (
                <Square
                  occupied={occupied}
                  shot={shot}
                  hit={hit}
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
