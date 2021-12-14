//----------------------React imported files --------------------------//
import React, { useState } from 'react';
import { v1 as uuid } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

//----------------------Local imported files --------------------------//
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(uuid());
  const [item, setItem] = useState('');
  const [editItem, setEditItem] = useState(false);

  // state = {
  //   items: [],
  //   id: uuid(),
  //   item: '',
  //   editItem: false,
  // };

  const handleChange = (event) => {
    // this.setState({
    //   item: event.target.value,
    // });

    setItem(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      // id: this.state.id,
      // title: this.state.item,
      id: id,
      title: item,
    };

    const updatedItems = [...items, newItem];

    // this.setState({
    //   items: updatedItems,
    //   item: '',
    //   id: uuid(),
    //   editItem: false,
    // });
    setItems(updatedItems);
    setItem('');
    setId(uuid());
    setEditItem(false);
  };

  const clearList = () => {
    // this.setState({
    //   items: [],
    // });

    setItems([]);
  };

  const handleDelete = (id) => {
    // console.log(`Handle Detete ${id}`);
    const filteredItems = items.filter((item) => item.id !== id);
    // this.setState({
    //   items: filteredItems,
    // });
    setItems(filteredItems);
  };

  const handleEdit = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    const selectedItem = items.find((item) => item.id === id);
    // this.setState({
    //   items: filteredItems,
    //   item: selectedItem.title,
    //   id: id,
    //   editItem: true,
    // });

    setItems(filteredItems);
    setItem(selectedItem.title);
    setId(id);
    setEditItem(true);
  };
  // console.log('State ==>', this.state);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 mt-5'>
          <h3 className='text-capitalize text-center'>todo input</h3>
          <TodoInput
            item={item}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editItem={editItem}
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
