import React from 'react';
import { ToDoContext } from '../context/todo-context';

export default class AddItemForm extends React.Component {
  static contextType = ToDoContext;

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.context.addItem}>
            <input placeholder="Add To Do List Item" onChange={this.context.handleInputChange} />
          </form>
        </div>
      </>
    );
  }
}
