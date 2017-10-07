import React, { Component } from 'react'
import { MovieStore } from 'stores'
import { object } from 'prop-types'

import './styles/MovieInfoBox.scss'

export default class MovieInfoBox extends Component {
  static propTypes = {
    movie: object.isRequired
  }

  handleGetYear(date) {
    if (date && date !== '') {
      return date.match(/^(.*?)-/)[1]
    }
    return 'unknown'
  }

  handleGetMediaLink = () => {
    const { movie } = this.props
    MovieStore.getMedia(movie.id, movie.media_type)
  }

  render() {
    const { movie } = this.props
    const date = movie.release_date ? movie.release_date : movie.first_air_date
    const name = movie.title ? movie.title : movie.original_name

    return (
      <div className="Movie-Info-Box-Container" key={movie.id}>
        <img
          className="Movie-Poster"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="movie poster"
        />
        <div className="Movie-Info">
          <a
            href={`https://www.themoviedb.org/${movie.media_type}/${movie.id}`}
            target="_blank"
            rel="noopener">
            <h2>{`${name} (${this.handleGetYear(date)})`}</h2>
          </a>
          <div className="MovieRatingContainer">
            <div className="MovieRatingBox">
              <p>TMDB:</p>
              <h2 className="Movie-Score">
                {movie.vote_average === 0 ? 'N/A' : movie.vote_average}
              </h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
