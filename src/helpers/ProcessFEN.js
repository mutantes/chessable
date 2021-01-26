function ProcessFEN(fen) {
    
    const FEN_ARRAY = fen.split('/'),
        chessboardStatus = new Array(64);

    let currentPosition = 0;

    chessboardStatus.fill({ 
        empty: true,
        piece: ''
    })

    FEN_ARRAY.forEach(row => {
        row.split('').forEach( char => {
            if (!isNaN(Number(char))) {
                currentPosition = currentPosition + Number(char)
            } else if (char === 'p') {
                chessboardStatus[currentPosition] = {
                    empty: false,
                    piece: char
                };
                currentPosition++;
            } else {
                console.log('Other pieces are not yet implemented');
                currentPosition++;
            }
        })
    });

    return chessboardStatus;
}

export default ProcessFEN;