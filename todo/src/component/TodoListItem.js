import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';

// 할일 항목 1객(부모 컴포넌드로 부터 받는 프롭)
function TodoListltem({todo}) {
    const {id,text,checked}=todo;
    return (
        <div className='TodoListItem'>
            <div>
                {checked? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className='text'>{text}</div>
            </div>
            <div><MdRemoveCircleOutline/></div>
        </div>
        
    );
}

export default TodoListltem;