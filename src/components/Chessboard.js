import React, { useContext } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Square from "./Square";

import { ChessboardContext } from "../helpers/ChessboardContext";

import "../assets/scss/components/Chessboard.scss";

const Chessboard = () => {

  
  const [context] = useContext(ChessboardContext);


  return (
    <DndProvider backend={HTML5Backend}>
      <div className="chessboard">
        {context.map((square, i) => {
          return (
            <Square
              key={i}
              square={i}
              piece={square.empty ? null : square.piece}
            />
          );
        })}
      </div>
    </DndProvider>
  );
};

export default Chessboard;
