import React, { useContext } from "react";
import { ChessboardContext } from "../helpers/ChessboardContext";

import "../assets/scss/components/AddPawn.scss";

const AddPawn = (props) => {
  
  const [context, setContext] = useContext(ChessboardContext);

  const handleAddPAwn = () => {
    let emptySquares = [];

    let chessBoardTrimmed = context.slice(0,-8);

    chessBoardTrimmed.forEach((item, i) => {
      if (item.empty) {
        emptySquares.push(i);
      }
    });

    let randomIndex = Math.floor(Math.random() * emptySquares.length),
      updateIndex = emptySquares[randomIndex],
      newContext = [...context];

    newContext[updateIndex] = {
      empty: false,
      piece: 'P'
    }

    setContext(newContext);
  };

  return (
      <button className="add-pawn" onClick={handleAddPAwn}>
        + Add Pawn
      </button>
  );
};

export default AddPawn;
