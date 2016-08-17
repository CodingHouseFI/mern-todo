import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import List from './components/List'

export default class App extends Component {
  constructor() {
    super(); // initializes 'this'

    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(res => {
        return res.json();
      })
      .then(todos => {
        this.setState({todos});
      })
      .catch(err => {
        throw err;
      })
  }
  render() {

    return (
      <Router history={browserHistory}>
        <Route path='/list' component={List} todos={this.state.todos}></Route>
      </Router>
    )
  }
}
