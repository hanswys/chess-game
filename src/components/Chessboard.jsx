import React, { useState } from "react";
import { Chess } from "chess.js";
import "../index.css";

const Chessboard = () => {
  const [game, setGame] = useState(new Chess());
  const [board, setBoard] = useState(game.board());
  const [selectedSquare, setSelectedSquare] = useState(null);

  const handleSquareClick = (row, col) => {
    const square = board[row][col];
    const position = `${String.fromCharCode(97 + col)}${8 - row}`;

    if (selectedSquare) {
      // Try to make a move
      const move = game.move({
        from: selectedSquare,
        to: position,
        promotion: "q", // Always promote to a queen for simplicity
      });

      if (move) {
        setBoard(game.board());
      }
      setSelectedSquare(null);
    } else if (square) {
      setSelectedSquare(position);
    }
  };

  const renderSquare = (piece, row, col) => {
    const isLight = (row + col) % 2 === 0;
    const pieceSymbol = piece ? piece.type + (piece.color === "w" ? "w" : "b") : "";

    return (
      <div
        key={`${row}-${col}`}
        className={`square ${isLight ? "light" : "dark"} ${
          selectedSquare === `${String.fromCharCode(97 + col)}${8 - row}` ? "selected" : ""
        }`}
        onClick={() => handleSquareClick(row, col)}
      >
        {pieceSymbol && <div className={`piece ${pieceSymbol}`}></div>}
      </div>
    );
  };

  return (
    <div className="chessboard">
      {board.map((row, rowIndex) =>
        row.map((piece, colIndex) => renderSquare(piece, rowIndex, colIndex))
      )}
    </div>
  );
};

export default Chessboard;