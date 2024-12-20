import React, { useRef, useState } from 'react';

function CalculateRef() {
    const [op, setOp]= useState ('');
    const [result, setResult]= useState(0);
// useState 훅으로 정의한 변수는 상태 변수
const first = useRef()
const second = useRef()
const message = useRef()

// 상태 변수 username 또는 nickname 값이 변경되면 리렌더링.콘솔 출력
const hello = () =>{
    alert('인사'+ message.current)
}

// OK 버튼 이벤트
const handleCalculate = (e) => {
    const sel = e.target.innerHTML
    const op1=Number(first.current.value)
    const op2=Number(second.current.value)
    setOp(sel)
    //  if(a==1) ~ else if(a==2) ~ else if(a==3) ~ else if(a==4) 
    //  동등 조건식을 여러번 검사해야 할때 switch 변경
    switch (sel) {  
      case '+':
        setResult(op1+op2)
        break;
      case '-':
        setResult(op1-op2)
        break;
      case '×':
        setResult(op1*op2)
        break;
      case '÷':
        setResult(op1/op2)
        break;
      default: 
      // 위의 case 값에 모두 해당되지 않을 때
        setResult(0)
        break;
    }
}


return (
  <div>
        <h3>input 에 ref  활용</h3>
        <p>입력 요소에 상태 변수를 사용하지 않고 ref 속성으로 DOM 요소 상태</p>
        <hr/>
        <input type='text'
              placeholder='첫번째 값을 입력하세요.'
              ref={first}
              // value={op1} 
              // onChange={(e) => setop1(Number(e.target.value))}
        />      
        <span id="op">{op}</span>
        <input type='text'
              placeholder='두번째 값을 입력하세요.'
              ref={second}
              // value={op2}
              // onChange={(e) => setop2(Number(e.target.value))}
        /> 
        <span id="op">=</span>
        <input type='text'
               value={result} disabled
        />       
        <hr/>     
        <div className="calcBtn">
          <button onClick={handleCalculate}>+</button>
          <button onClick={handleCalculate}>-</button>
          <button onClick={handleCalculate}>×</button>
          <button onClick={handleCalculate}>÷</button>
        </div>
        <div>
            <h4>새로운 입력 요소 테스트</h4>
            <input type='text' ref={message}/>
            <button onClick={hello}>인사하기</button>
        </div>
  </div>
)
}

export default CalculateRef;