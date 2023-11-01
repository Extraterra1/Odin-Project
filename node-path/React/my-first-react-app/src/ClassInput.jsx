/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class ClassInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputVal: ''
    };
  }

  render() {
    return (
      <section style={{ border: '2px solid red' }}>
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form>
          <label htmlFor="task-entry">Enter a task: </label>
          <input type="text" name="task-entry" />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul></ul>
      </section>
    );
  }
}
