import React from "react";
import Chessboard from "./components/Chessboard";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React Chess Game</h1>
      <Chessboard />
    </div>
  );
};

export default App;