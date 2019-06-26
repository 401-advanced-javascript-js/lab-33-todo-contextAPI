import React from 'react';

import { ToDoContext } from '../context/todo-context';

export default class Counter extends React.Component {
  static contextType = ToDoContext;

  render() {
    return (
      <>
        <h2>There are {this.context.todoList.length} items in the list</h2>
      </>
    );
  }
}
