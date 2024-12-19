
import React, { useState } from 'react';  // useState를 명시적으로 import 해야 합니다.

function InputState() {
    const [username, setUsername] = useState('');  // 상태 변수명 수정
    const [nickname, setNickname] = useState('');  // 상태 변수명 수정
    
    console.log('리렌더링',username,nickname);

    const handleOk = () => {
        alert(`${username} : ${nickname}`);
        setUsername('');
        setNickname('');
    };

    const handleNickkeydown = (e) => {
        if (e.key === 'Enter') {  // 세미콜론 제거
            handleOk();
        }
    };

    return (
        <div>
            <h3>input 에  state 변수 활용</h3>
            <p>input value에 상태 변수를 적용하면 onChange이벤트 필요.</p>
            <hr />
            <input
                type="text"
                placeholder="사용자 이름 입력하세요"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="text"
                placeholder="사용자 닉네임 입력하세요"
                value={nickname}
                onKeyDown={handleNickkeydown}
                onChange={(e) => setNickname(e.target.value)}
            />
            <button onClick={handleOk}>입력완료</button>
        </div>
    );
}

export default InputState;
