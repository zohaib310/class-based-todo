import React, { Component } from 'react';
import { Button } from '@mui/material';

const TodoInput = (props) => {
  // console.log('Props ==>', this.props);
  const { item, handleChange, handleSubmit, editItem } = props;
  return (
    <div className='card card-body mt-3'>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <div className='input-group-text.bg-primary text-white'>
              <i className='fas fa-delete' />
            </div>
          </div>
          <input
            type='text'
            className='form-control text-capitalize'
            placeholder='Add to do item'
            value={item}
            onChange={handleChange}
          />
        </div>
        <Button
          type='submit'
          variant='contained'
          sx={{ width: '100%', marginTop: '2%' }}
          // className='btn btn-block btn-primary mt-3 text-uppercase'
          onClick={handleSubmit}
        >
          {editItem ? 'update' : 'add to do'}
        </Button>
      </form>
    </div>
  );
};

export default TodoInput;
