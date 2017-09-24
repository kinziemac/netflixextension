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
          <h2>{`${movie.title} (${this.handleGetYear(
            movie.release_date
          )})`}</h2>
          <div className="MovieRatingContainer">
            <div className="MovieRatingBox">
              <p>TMDB:</p>
              <h2 className="Movie-Score">
                {movie.vote_average === 0 ? 'N/A' : movie.vote_average}
              </h2>
            </div>
            <div className="MovieRatingBox">
              <p>IMDB:</p>
              <h2 className="Movie-Score">
                {movie.imdb_rating ? movie.imdb_rating : 'N/A'}
              </h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
