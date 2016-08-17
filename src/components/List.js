import React, { Component } from 'react';

export default class List extends Component {
  constructor() {
    super();

    this.startEdit = this.startEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);

    this.state = {
      editing: null,
      editTaskInput: ''
    }
  }

  saveEdit(id) {
    let task = this.state.editTaskInput;

    let newTodo = {task};

    this.props.updateTodo(id, newTodo);
    this.setState({editing: null});
  }

  startEdit(todo) {
    console.log('todo:', todo);
    this.setState({
      editing: todo._id,
      editTaskInput: todo.task
    });
  }

  cancelEdit() {
    this.setState({editing: null});
  }

  render() {
    if(!this.props.todos) {
      return null;
    }

    let rows = this.props.todos.map(todo => {
      if(this.state.editing === todo._id) {
          return (
            <tr key={todo._id}>
              <td><input type="text" value={this.state.editTaskInput} onChange={e => {this.setState({editTaskInput: e.target.value}) }} /></td>
              <td>
                <input type="checkbox"
                       checked={todo.isComplete}
                       onChange={() => { this.props.toggleTodo(todo._id) }}/>
              </td>
              <td>{todo.createdAt}</td>
              <td>
                <button type="button" className="btn btn-primary btn-xs" onClick={this.saveEdit.bind(null, todo._id)}>
                  <span className="glyphicon glyphicon-ok"></span>
                </button>
                <button type="button" className="btn btn-danger btn-xs" onClick={this.cancelEdit}>
                  <span className="glyphicon glyphicon-remove"></span>
                </button>
              </td>
            </tr>
          )
      } else {
        return (
          <tr key={todo._id}>
            <td>{todo.task}</td>
            <td>
              <input type="checkbox"
                     checked={todo.isComplete}
                     onChange={() => { this.props.toggleTodo(todo._id) }}/>
            </td>
            <td>{todo.createdAt}</td>
            <td>
              <button type="button" className="btn btn-primary btn-xs" onClick={this.startEdit.bind(null, todo)}>
                <span className="glyphicon glyphicon-edit"></span>
              </button>
            </td>
          </tr>
        )
      }
    });

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Is Complete</th>
            <th>Created At</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}
