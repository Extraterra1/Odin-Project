/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import './ClassInput.css';

export default class ClassInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['sample', 'lorem', 'ipsum'],
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
      todos: state.todos.concat(state.inputVal),
      inputVal: ''
    }));
  }

  handleDelete(todo) {
    const newTodos = this.state.todos.filter((e) => e !== todo);
    this.setState((state) => {
      return { ...state, todos: newTodos };
    });
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
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => {
            return (
              <li key={todo}>
                <span className="todo-content">{todo}</span>
                <span onClick={() => this.handleDelete(todo)} className="delete">
                  <Icon icon="ion:trash-b" />
                </span>
                <span className="edit">
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
