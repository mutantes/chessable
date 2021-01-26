import React from 'react';
import { useDrop } from 'react-dnd';

import { ItemTypes } from '../helpers/ItemTypes';
import Pawn from './Pawn';

import '../assets/scss/components/Square.scss';

const Square = ({piece, square }) => {

    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.PAWN,
        drop: () => ({ name: 'Square ' + square }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    return (
        <div className="square" ref={drop} >
            { piece ? <Pawn piece={ piece } /> : null }
        </div>
    )
}

export default Square;