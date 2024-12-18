import React, { useState } from 'react';

function Say(props) {
    //message 변수는 상태변수: 값을 변경하려면 useState 가 리턴한 메서드 실행해야 한다.?
    const [message, setMessage] = useState('test')
    //function 키워드는 함수 컴포넌트에만 사용하고 
    //인자로 전달할 함수는 화살표 함수로 하겠습니다.
    const [color, setColor] = useState('green')

   const handleEnter =(e)=>{
       // 이벤트 정보 저장하는 인 e는 필요시에만 정의합니다.
        setMessage('환영합니다^^ ')
   }
    const handleOut =(e)=>{
        // 이벤트 정보 저장하는 인 e는 필요시에만 정의합니다.
        
        setMessage('Good Bye~')
   }
   const handleOut1=()=>{
         setColor('red')
   }
   const handleOut2=()=>{
    setColor('yellow') 
   }
   const handleOut3=()=>{
    setColor('blue')
   }
   //onClick 속성값은 이벤트 처리 함수가 되어야 한다.
   //JSX 문법 안에서는 {} 자바스크립트 코드 (변수, 수식, 함수, 객체, 배열) 작성,
    return (
        <div>
            <button onClick={handleEnter}>입장</button>
            <button onClick={() => handleOut(message + 1)}>퇴장</button>  

            <h3 style={{ color: color }}>{message}{props.name}</h3>

            <button onClick={handleOut1}>빨간색</button>
            <button onClick={handleOut2}>노란색</button>
            <button onClick={handleOut3}>파란색</button>

        </div>
    );
}

export default Say;