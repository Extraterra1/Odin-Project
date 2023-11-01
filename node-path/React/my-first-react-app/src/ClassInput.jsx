/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './ClassInput.css';

export default class ClassInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
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
            return <li key={todo}>{todo}</li>;
          })}
        </ul>
      </section>
    );
  }
}
