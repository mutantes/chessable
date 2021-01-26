import React, { useState } from 'react';
import Chessboard from "./components/Chessboard.js";
import AddPawn from "./components/AddPawn";

import ProcessFEN from "./helpers/ProcessFEN";
import { ChessboardContext } from "./helpers/ChessboardContext";

import "./assets/scss/utils/reset.scss";
import "./assets/scss/App.scss";

function App() {
  const chessboardStatus = ProcessFEN("8/2p5/8/8/8/8/8/8");
  const [context, setContext] = useState(chessboardStatus);


  return (
    <ChessboardContext.Provider value={[context, setContext]}>
      <Chessboard />
      <AddPawn />
    </ChessboardContext.Provider>
  );
}

export default App;
