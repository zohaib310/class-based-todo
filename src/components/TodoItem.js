import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    // console.log('Props in todo item ==>', this.props);
    const { handleDelete, handleEdit, title } = this.props;
    return (
      <li className='list-group-item text-capitalize py-2 d-flex align-items-center justify-content-between-my-2'>
        <div className='flex-fill'>
          <p className='mb-0'>{title}</p>
        </div>
        <div>
          <span className='mx-2 text-success' onClick={handleEdit}>
            <i className='fas fa-pen' />

          </span>
          <span className='mx-2 text-danger' onClick={handleDelete}>
            <i className='fas fa-trash' />
          </span>
        </div>
      </li>
    );
  }
}
