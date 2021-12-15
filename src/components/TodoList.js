import React from 'react';
import TodoItem from './TodoItem';
import { Button } from '@mui/material';

const TodoList = (props) => {
  // console.log('Props in Todo list component ==>', this.props);
  const { clearList, handleDelete, handleEdit, items } = props;
  return (
    <ul className='list-group my-5'>
      <h3 className='text-capitalize text-center'>Todo List</h3>
      {items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            title={item.title}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
          />
        );
      })}
      <Button
        type='submit'
        variant='contained'
        color='error'
        sx={{ width: '100%', marginTop: '2%' }}
        // className='btn btn-block btn-primary mt-3 text-uppercase'
        onClick={clearList}
      >
        Clear list
      </Button>
    </ul>
  );
};

export default TodoList;
