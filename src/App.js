//----------------------React imported files --------------------------//
import React, { Component } from 'react';
import { v1 as uuid } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

//----------------------Local imported files --------------------------//
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false,
  };

  handleChange = (event) => {
    this.setState({
      item: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false,
    });
  };

  clearList = () => {
    this.setState({
      items: [],
    });
  };

  handleDelete = (id) => {
    // console.log(`Handle Detete ${id}`);
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    // console.log(typeof selectedItem);
    // console.log(selectedItem);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem: true,
    });
  };
  render() {
    // console.log('State ==>', this.state);
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 mt-5'>
            <h3 className='text-capitalize text-center'>todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
