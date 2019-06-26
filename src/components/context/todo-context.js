/* eslint-disable react/prop-types */
import React from 'react';
import uuid from 'uuid/v4';

export const ToDoContext = React.createContext();

export default class ContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      item: {},
      editing: false,
      // -------------------------
      handleInputChange: this.handleInputChange,
      addItem: this.addItem,
      updateItem: this.updateItem,
      toggleComplete: this.toggleComplete,
      saveItem: this.saveItem,
      toggleEdit: this.toggleEdit,
    };
  }

  handleInputChange = (event) => {
    const item = {
      text: event.target.value,
      complete: !!event.target.complete,
      id: event.target.id || uuid(),
    };
    this.setState({ item });
  };

  addItem = (e) => {
    e.preventDefault();
    e.target.reset();
    this.setState({ todoList: [...this.state.todoList, this.state.item] });
  };

  updateItem = (e) => {
    e.preventDefault();
    this.saveItem(this.state.item);
  };

  toggleComplete = (id) => {
    const item = this.state.todoList.filter(i => i.id === id)[0] || {};
    if (item.id) {
      item.complete = !item.complete;
      this.saveItem(item);
    }
  };

  saveItem = (updatedItem) => {
    this.setState({
      todoList: this.state.todoList.map(item => (item.id === updatedItem.id ? updatedItem : item)),
      editing: false,
    });
  };

  toggleEdit = (id) => {
    const editing = this.state.editing === id ? false : id;
    this.setState({ editing });
  };

  render() {
    return <ToDoContext.Provider value={this.state}>{this.props.children}</ToDoContext.Provider>;
  }
}
