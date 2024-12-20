import React, { useState } from 'react';

function Example(props) {
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    const up = ()=>{
        setResult(result)
    }
    const down = ()=>{
        setResult(result)
    }
    const left = ()=>{
        setResult(result)
    }
    const right = ()=>{
        setResult(result)
    }
    const moveUp = ()=>{
        setResult(result)
    }
    const moveDown = ()=>{
        setResult(result)
    }
    const moveLeft = ()=>{
        setResult(result)
    }
    const moveRight = ()=>{
        setResult(result)
    }
    
    return (
        <div>
            
            <div>
                <button onclick="up()">↑</button>
                <button onclick="down()">↓</button>
                <button onclick="left()">→</button>
                <button onclick="right()">←</button>
            </div>
            <div>
                <button onclick="moveUp()">▲</button>
                <button onclick="moveDown()">▼</button>
                <button onclick="moveLeft()">▶</button>
                <button onclick="moveRight()">◀</button>
            </div>
            <h1 style={{widh: '100px',height:'100px'}}>{result}</h1>
        </div>
    );
}

export default Example;