import React from 'react';

import Counter from '../counter/counter';
import AddItemForm from '../addItemForm/addItemForm';
import ToDoList from '../ToDoList/toDoList';

import { ToDoContext } from '../context/todo-context';

import('./todo.scss');

class ToDo extends React.Component {
  static contextType = ToDoContext;

  render() {
    return (
      <section className="todo">
        <Counter />
        <AddItemForm />
        <ToDoList />
      </section>
    );
  }
}

export default ToDo;
