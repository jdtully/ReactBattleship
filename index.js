import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Board from "./Board";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board name="board1" rows={10} cols={10} />
        </div>
        <div className="game-board">
          <Board name="board2" rows={10} cols={10} />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
