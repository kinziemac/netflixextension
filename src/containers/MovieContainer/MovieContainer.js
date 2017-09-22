import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RottenTomatoesStore from 'stores/RottenTomatoesStore'

import './styles/MovieContainer.scss'

export default class MovieContainer extends Component {
  state = {
    movieTitle: ''
  }

  handleChangeText = e => {
    this.setState({ movieTitle: e.target.value })
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
            floatingLabelText="Enter Movie:"
            onChange={this.handleChangeText}
            value={movieTitle}
          />
          <button onClick={RottenTomatoesStore.getMovieRating} />
        </div>
      </div>
    )
  }
}
