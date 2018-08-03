import React, { Component } from 'react'
import { connect } from 'react-redux'
import { testAction } from './actions/testAction'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  testAction: () => dispatch(testAction())
})

class App extends Component {
  styles = {
    app: {
      background: 'red',
      fontFamily: `'Montserrat', sans-serif`
    }
  }

  testAction = event => {
    this.props.testAction()
  }

  render () {
    return (
      <div style={this.styles.app}>
        <header>
          <h1>Welcome to React</h1>
        </header>
        <p>
          <pre>
            {JSON.stringify(this.props)}
          </pre>
          <button onClick={this.testAction}>Test redux action</button>
        </p>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
