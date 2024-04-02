import React, { useState } from 'react'
import "./stylesheets/Square.css"

const Square = ({ value, onSquareClick }) => {

    return (
        <button className='square' onClick={onSquareClick}>{value}</button>
    )
}

export default Square
