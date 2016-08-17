import React, { Component } from 'react';

export default class List extends Component {

  render() {

    console.log('this.props.todos:', this.props.todos)

    return (
      <h1>List</h1>
    )


  }
}
