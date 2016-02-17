import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

import * as TodoActions from '../actions/todos'

import style from './App.css'

class App extends Component {
  addTodo() {
    this.props.actions.addTodo('action add ' + Math.random())
  }

  goAbout() {
    this.props.routeActions.push('/about')
  }

  render() {
    const { todos, actions, children } = this.props
    return (
      <div className={style.normal}>
        <section className={style.main}>
          <ul className={style.ul}>
            {todos.map(todo =>
              <li key={todo.id}><label>{todo.id} - {todo.text}</label></li>
            )}
          </ul>
        </section>
        <button onClick={::this.addTodo}>Add Todo</button>
        <br></br>
        <button onClick={::this.goAbout}>Go About</button>

        {children}
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
    actions: bindActionCreators(TodoActions, dispatch),
    routeActions: bindActionCreators(routeActions, dispatch),
    dispatch: dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
