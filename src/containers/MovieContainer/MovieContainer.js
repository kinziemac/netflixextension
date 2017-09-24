import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { MovieStore } from 'stores'

import './styles/MovieContainer.scss'

export default class MovieContainer extends Component {
  state = {
    movieTitle: '',
    movieList: []
  }

  handleChangeText = e => {
    this.setState({ movieTitle: e.target.value })
  }

  handleFindMovie = () => {
    const { movieTitle } = this.state
    //MovieStore.getRottenTomatoesMovie()
    MovieStore.getTMBDMovie(movieTitle).then(data => {
      if (!data.errors) {
        this.setState({ movieList: data.results })
      }
    })
  }

  render() {
    const { movieTitle, movieList } = this.state

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
        <div>
          {movieList.map(movie => {
            return (
              <div className="movie-fields" key={movie.id}>
                <p>Title: {movie.title}</p>
                <p>Release date: {movie.release_date}</p>
                <p>Movie score: {movie.vote_average}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
