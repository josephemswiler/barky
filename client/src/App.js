import React, { Component } from 'react'
import { connect } from 'react-redux'
import { testAction } from './actions/testAction'

import BioCard from './components/BioCard'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  testAction: () => dispatch(testAction())
})

class App extends Component {
  styles = {
    app: {
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
        <BioCard />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
