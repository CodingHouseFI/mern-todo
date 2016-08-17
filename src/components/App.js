import React, { Component } from 'react';

import List from './List'

export default class App extends Component {
  constructor() {
    super(); // initializes 'this'

    this.toggleTodo = this.toggleTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);

    this.state = {
      todos: [],
      view: 'List'
    }
  }

  updateTodo(id, todoUpdate) {
    fetch(`/api/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify(todoUpdate),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .then(todos => {
      this.setState({todos});
    })
    .catch(err => {
      console.log('err:', err);
    })
  };

  toggleTodo(id) {
    fetch(`/api/todos/${id}/toggle`, {
      method: 'PUT'
    })
    .then(res => res.json())
    .then(todos => {
      this.setState({todos});
    })
    .catch(err => {
      console.log('err:', err);
    })
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(todos => {
        this.setState({todos});
      })
      .catch(err => {
        throw err;
      })
  }
  render() {
    let content;
    switch(this.state.view) {
      case 'List': 
        content = (
          <List todos={this.state.todos} toggleTodo={this.toggleTodo} updateTodo={this.updateTodo} />
        )
    }

    return (
      <div className='container'>
        {content}
      </div>
    )
  }
}
