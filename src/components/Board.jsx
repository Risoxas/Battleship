import React, { useState, useEffect } from "react";
import data from '../start.json'
import './Board.css'


export default function Board({ board, handleClick }) {
    const concatenate = (num1, num2) => parseInt('' + num1 + num2)
    const [hits, setHits] = useState([])
    const [ships, setShips] = useState([])
    const getPosition = (e) => {
        const position = parseInt(e.target.innerText, 10)
        if (ships.includes(position)) setHits([...hits, position])
        if (ships.sort().join(',') === hits.sort().join(',')) {
            alert('You Won!')
        }
        handleClick(position)

    }
    useEffect(() => {
        const positions = data.layout.reduce((accum, curr) => {
            let newShips = curr.positions.map((location) => concatenate(location[0], location[1]))
            return [...accum, ...newShips]
        }, [])
        setShips(positions)
    }, [])
    return (
        <div className="grid-container ">
            {board.map((cell, index) => {
                return (
                    <span key={index} role='button' className={`bg-primary py-2 mx-2 my-1 ${hits.includes(index) ? 'bg-success' : cell === 0 ? 'bg-primary' : 'bg-danger'}`} onClick={getPosition}>
                        {(index).toLocaleString('en-US', { minimumIntegerDigits: 2 })}
                    </span>)
            })}
        </div >
    )
}