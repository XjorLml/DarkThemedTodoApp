import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { Container } from '@mui/material';
import { Card } from '@mui/material'; 
import { Checkbox } from '@mui/material';

  const label = { inputProps: { 
    'aria-label': 'Checkbox demo' } 
  };
  const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
    id: null,
    value: ''
  });


  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <Container >
      <Card
        className="root"
        variant="standard"
        style={{ marginTop: 5, paddingRight: 10, paddingBottom: 5, fontSize: 17, background: "lightgray" }}
      >
        <div
          className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
          key={index}
        >
        <div> 
          <Checkbox {...label}  color='success' />
        </div>
        <div key={todo.id} onClick={() => completeTodo(todo.id)} >
            {todo.text}
        </div>
        <div className='icons'>
          <RiCloseCircleLine 
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
          <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
          </div>  
        </div>
      </Card>
    </Container>
  ));
};

export default Todo;