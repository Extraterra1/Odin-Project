/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import './ClassInput.css';
import Count from './Count';

export default class ClassInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { value: 'sample', editing: false, editingVal: 'sample' },
        { value: 'lorem', editing: false, editingVal: 'sample' },
        { value: 'ipsum', editing: false, editingVal: 'sample' }
      ],
      inputVal: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat({ value: state.inputVal, editing: false }),
      inputVal: ''
    }));
  }

  handleDelete(todo) {
    const newTodos = this.state.todos.filter((e) => e.value !== todo);
    this.setState((state) => {
      return { ...state, todos: newTodos };
    });
  }

  initiateEdit(todo) {
    const newTodos = this.state.todos.map((e) => {
      if (e.value !== todo.value) return e;
      return {
        ...e,
        editing: !e.editing
      };
    });
    this.setState((state) => ({ ...state, todos: newTodos }));
  }

  handleEditInputChange(todo, ev) {
    const inputValue = ev.target.value;
    const newTodos = this.state.todos.map((e) => {
      if (e.value !== todo.value) return e;
      return {
        ...e,
        editingVal: inputValue
      };
    });
    this.setState((state) => ({ ...state, todos: newTodos }));
  }

  handleResubmit(todo) {
    const newTodos = this.state.todos.map((e) => {
      if (e.value !== todo.value) return e;
      return {
        value: e.editingVal,
        editing: !e.editing
      };
    });
    this.setState((state) => ({ ...state, todos: newTodos }));
  }

  render() {
    return (
      <section style={{ border: '2px solid red' }}>
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form>
          <div className="form-group">
            <label htmlFor="task-entry">Enter a task: </label>
            <input value={this.state.inputVal} type="text" name="task-entry" onChange={this.handleInputChange} />
          </div>
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
        <h4>
          All the tasks! <Count count={this.state.todos.length} />
        </h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => {
            return (
              <li key={todo.value}>
                {!todo.editing && <span className="todo-content">{todo.value}</span>}
                {todo.editing && (
                  <>
                    <input onChange={(ev) => this.handleEditInputChange(todo, ev)} type="text" value={todo.editingVal} />
                    <button onClick={() => this.handleResubmit(todo)}>Resubmit</button>
                  </>
                )}
                <span onClick={() => this.handleDelete(todo.value)} className="delete">
                  <Icon icon="ion:trash-b" />
                </span>
                <span onClick={() => this.initiateEdit(todo)} className="edit">
                  <Icon icon="ion:edit" />
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
