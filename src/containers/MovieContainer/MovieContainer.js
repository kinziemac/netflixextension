import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { MovieStore } from 'stores'

import './styles/MovieContainer.scss'

export default class MovieContainer extends Component {
  state = {
    movieTitle: '',
    movieArray: null
  }

  handleChangeText = e => {
    this.setState({ movieTitle: e.target.value })
  }

  handleFindMovie = () => {
    const { movieTitle } = this.state
    //MovieStore.getRottenTomatoesMovie()
    MovieStore.getTMBDMovie(movieTitle)
    // .then(data => {
    //   console.log(data)
    // })
  }

  render() {
    const { movieTitle } = this.state

    return (
      <div id="MovieContainer">
        <div id="MovieContainerHeader">
          <h2>Movie Extension</h2>
        </div>
        <div id="MovieContainerSearch">
          <TextField
            style={{ width: '80%' }}
            floatingLabelText="Enter Movie:"
            onChange={this.handleChangeText}
            value={movieTitle}
          />
          <button onClick={this.handleFindMovie}>Find Movie Stats!</button>
        </div>
      </div>
    )
  }
}
