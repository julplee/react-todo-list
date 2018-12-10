import React, { Component } from 'react';
import './App.css';

import AddTodoItem from './AddTodoItem'
import TodoItems from './TodoItems'

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      currentItem: { text: '', key: '' },
    }
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }

    this.setState({
      currentItem,
    })
  }

  addItem = () => {

    const newItem = this.state.currentItem;

    if (newItem.text !== '') {
      console.log(newItem);
      if (newItem.text.length > process.env.REACT_APP_INPUT_LIMIT) {
        throw new Error("can't store a task name that long!");
      }

      const items = [...this.state.items, newItem];

      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  render() {
    return (
      <div className="App">
        <AddTodoItem
          addItem={this.addItem}
          handleInput={this.handleInput}
          inputValue={this.state.currentItem}
        />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
