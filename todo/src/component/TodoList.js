import React from 'react';
import TodoListltem from './TodoListItem';

function TodoList({todos}) {
    return (
        <div className='TodoList'>
            {todos.map((item) =>
              <TodoListltem todo={item}/>
            )}
        </div>
    );
}

export default TodoList;