import React, { Component } from 'react'
import MovieContainer from 'containers/MovieContainer/MovieContainer'
import { MuiThemeProvider } from 'material-ui/styles'

import './styles/App.scss'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <MovieContainer />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
