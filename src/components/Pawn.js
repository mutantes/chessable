import React, { useContext } from "react";
import { useDrag } from "react-dnd";

import { ItemTypes } from "../helpers/ItemTypes";
import { ChessboardContext } from "../helpers/ChessboardContext";

import "../assets/scss/components/Pawn.scss";

const Pawn = ({ piece }) => {
  const ChessboardColor = useContext(ChessboardContext);

  const [{ isDragging }, drag] = useDrag({
    item: { piece, type: ItemTypes.PAWN },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (piece && dropResult) {
        alert(`You dropped ${piece} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      className={"pawn pawn-" + piece}
      style={{ opacity: isDragging ? 0.2 : 0.9 }}
      ref={drag}
      color={ ChessboardColor }
    ></div>
  );
};

export default Pawn;
