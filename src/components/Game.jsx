import React, { useState } from 'react'
import Board from './Board'
import "./stylesheets/Game.css"


const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]) // array of arrays
    const [currentMove, setCurrentMove] = useState(0)
    const currentSquares = history[currentMove] // last index | current state
    const xIsNext = currentMove % 2 === 0

    function handlePlay(nextSquare) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquare]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }


    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = "go to move # " + move
        }
        else {
            description = "go to game start"
        }

        return (
            <button className='steps' key={move} onClick={() => jumpTo(move)}>{description}</button>
        )
    })

    return (
        <div className='game'>
            <div className='game-board'>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div>
                <ol className='game-info' type='1'>{moves}</ol>
            </div>
        </div>
    )
}

export default Game
