import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';

function TodoInsert({onInsert}) {

    const [value,setValue]=useState('')

    const handleSubmit = (e)=>{
        e.preventDefault(); //form 제출 동작을 못하게 막음.
        onInsert(value) //이력값을 할일 목록에 추가시키는 함수 실행하기
        setValue('')
    }
    return (
        <form className='TodoInsert' onSubmit={handleSubmit}>
            <input placeholder='할일을 입력하세요'
            value={value}
            onChange={(e)=>setValue(e.target.value)}/>
            <button type='submit'>
                <MdAdd/>
            </button>
        </form>
    );
}

export default TodoInsert;