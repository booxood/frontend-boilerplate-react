import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'
import { Link } from 'react-router'

import style from './App.less'

class App extends Component {
  goTo(url) {
    this.props.routeActions.push(url)
  }

  render() {
    const { children } = this.props
    return (
      <div className={style.main}>
        <h1>Frontend Boilerplate React</h1>
        <div className={style.navbar}>
          <ul>
            <li onClick={this.goTo.bind(this, '/todos')}>Todos</li>
            <li onClick={this.goTo.bind(this, '/login')}>Login</li>
            <li><Link to="/about/hello" activeClassName={style.active} activeStyle={{ color: 'red' }} >About</Link></li>
          </ul>
        </div>

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
    routeActions: bindActionCreators(routeActions, dispatch),
    dispatch: dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
