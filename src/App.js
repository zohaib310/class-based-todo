//----------------------React imported files --------------------------//
import React, { useState, useEffect } from 'react';
import { v1 as uuid } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiHelper from '../src/api/ApiHelper';

//----------------------Local imported files --------------------------//
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  useEffect(() => {
    apiData();
  }, []);
  const [items, setItems] = useState([]);
  const [id, setId] = useState(uuid());
  const [item, setItem] = useState('');
  // const [editItem, setEditItem] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: id,
      title: item,
    };

    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setItem('');
    setId(uuid());
    setCompleted(false);
  };

  const clearList = () => {
    setItems([]);
  };

  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  const handleEdit = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    const selectedItem = items.find((item) => item.id === id);
    setItems(filteredItems);
    setItem(selectedItem.title);
    setId(id);
    setCompleted(true);
  };

  const apiData = () => {
    console.log('Inside api function');
    ApiHelper.todo_json((response) => {
      if (response.isSuccess) {
        console.log('Success Respooonse ==>', response.response.data);
        setItems(response.response.data);
      } else {
        console.log('Error Respoooonse ==>', response.response);
      }
    });
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 mt-5'>
          <h3 className='text-capitalize text-center'>todo input</h3>
          <TodoInput
            item={item}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            completed={completed}
          />
          <TodoList
            items={items}
            clearList={clearList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
