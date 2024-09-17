import React, { useState } from "react";

const TicToc = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  let status = winner
    ? `Winner: ${winner}`
    : `Next Player: ${isXNext ? "X" : "O"}`;

  if (!calculateWinner(board) && board.every((dt) => dt !== null)) {
    status = "draw ! reset the game";
  }
  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const renderSquare = (index) => {
    return (
      <button
        className="w-24 h-24 border-2 border-gray-400 text-4xl font-bold flex items-center justify-center hover:bg-gray-200"
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </button>
    );
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Tic-Tac-Toe</h1>
      <div className="grid grid-cols-3 gap-2">
        {board.map((_, i) => renderSquare(i))}
      </div>
      <div className="mt-4">
        <p className="text-2xl font-medium mb-2">{status}</p>
        <button
          className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={handleReset}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default TicToc;
