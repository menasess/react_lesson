import React, { useState } from 'react';

function PageMove(props) {
    
    const [number, setNumber] = useState(5);

    const previous = ()=>{
          setNumber(number-1)
    }
    const since = ()=>{
          setNumber(number+1)
    }

    return (
        <div>
            <h3>현재 페이지 : {number} </h3>
            <h5>
            <button onClick={previous} disabled={number===1}><h2>＜</h2>
              
            </button>
            <button onClick={since} disabled={number === props.last}><h2>＞</h2>
            
            </button>
            </h5>
        </div>
    );
}

export default PageMove;