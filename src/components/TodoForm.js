import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          {/* <input */}
          <TextField id="outlined-basic" label="Update Todo" variant="outlined"
            size= "small"
            
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <Button variant="outlined" style={{fontSize:16}} color='primary' onClick={handleSubmit} className='todo-button edit'>
            Update
          </Button>
        </>
      ) : (
        <>
        {/*   <input */}
           <TextField id="outlined-basic" label="Add Todo" variant="outlined"
            size= "small"
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <Button variant="outlined" style={{fontSize:16}} color='success'onClick={handleSubmit} className='todo-button'>
            Add 
          </Button>
        </>
      )}
    </form>
  );
}

export default TodoForm;