import React, { Component } from 'react'
import { object } from 'prop-types'

import './styles/MovieInfoBox.scss'

export default class MovieInfoBox extends Component {
  static propTypes = {
    movie: object.isRequired
  }

  handleGetYear(date) {
    if (date !== '') {
      return date.match(/^(.*?)-/)[1]
    }
    return 'unknown'
  }

  render() {
    const { movie } = this.props

    return (
      <div className="Movie-Info-Box-Container" key={movie.id}>
        <img
          className="Movie-Poster"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="movie poster"
        />
        <div className="Movie-Info">
          <h3>{`${movie.title} (${this.handleGetYear(
            movie.release_date
          )})`}</h3>
          <h2 className="Movie-Score">
            {movie.vote_average === 0 ? 'No Rating' : movie.vote_average}
          </h2>
        </div>
      </div>
    )
  }
}
