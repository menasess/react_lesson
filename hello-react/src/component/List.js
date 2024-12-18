import React from 'react';
//배열 전달 받아서 각 원소값(요소값 ) 목록 만든다,
function List({names}) {
    //name는 부모 컴포넌트가 전달한 프로퍼티,
    //names.map() 는 names 가 배열 일떄 실행 가능,
    return (
        <ul>
            { names.map(item => <li>{item}</li>)}
            {/* { names.map(function(item){ 
                <li> {item} </li>}
                )} */}
        </ul>
    );
}

export default List;