// import './App.css';
import './component/TodoTemplate.scss';
import './component/TodoListItem.scss';
import './component/TodoInsert.scss';
import './component/TodoList.scss';
import TodoTemplate from './component/TodoTemplate';
import { useState } from 'react';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';

function App() {
  const initVal = [
    {
      id:1,
      text:'리액트 수업 복습',
      checked : true
    },
    {
      id:2,
      text:'리액트 프로젝트',
      checked : true
    },
    {
      id:3,
      text:'데이터베이스 테스트',
      checked : true
    },
  ]
  const [todos, setTodos]=useState(initVal)

  console.log("todos:",todos)

  //todos 에 할일 객체 추가
  const handleInsert = (text)=>{
    const todo = {
      id: todos.length +1,
      text,
      checked:false
    }
    setTodos(todos.concat(todo))
    //todos.concat(todo) 새로운 배열 리턴 state 재랜더링 한다.
  }
  return (
    <>
    <button onClick={()=>handleInsert('테스트 할일')}>할일추가</button>
   
     <TodoTemplate>
        <TodoInsert onInsert={handleInsert}/>
        <TodoList todos={todos}/>
     </TodoTemplate>
    
    </>
  );
}

export default App;
