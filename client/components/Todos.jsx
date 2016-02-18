import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as TodoActions from '../actions/todos'

class Todos extends Component {
  constructor(props, context) {
    super(props, context)
  }

  addTodo() {
    this.props.actions.addTodo('action add ' + Math.random())
  }

  render() {
    const { todos, actions, children } = this.props
    return (
      <div>
        <button onClick={::this.addTodo}>Add Todo</button>
        <section>
          <ul>
            {todos.map(todo =>
              <li key={todo.id}><label>{todo.id} - {todo.text}</label></li>
            )}
          </ul>
        </section>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)
