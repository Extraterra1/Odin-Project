/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class Count extends Component {
  render() {
    return <span className="count">{this.props.count}</span>;
  }
}
