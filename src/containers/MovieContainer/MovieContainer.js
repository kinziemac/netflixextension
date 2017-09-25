import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { MovieStore } from 'stores'
import { MovieInfoBox } from 'containers/MovieContainer'
import MovieIcon from 'images/Movie-Icon.png'
import CircularProgress from 'material-ui/CircularProgress'

import './styles/MovieContainer.scss'

export default class MovieContainer extends Component {
  state = {
    movieTitle: '',
    movieList: [],
    loading: false,
    error: '',
    scroll: false
  }

  constructor(props) {
    super(props)

    window.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        this.handleFindMovie()
      }
    })

    window.addEventListener('scroll', event => {
      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 20
      if (distanceY > shrinkOn) {
        this.setState({ scroll: true })
      } else {
        if (this.state.scroll) {
          this.setState({ scroll: false })
        }
      }
    })
  }

  handleChangeText = e => {
    this.setState({ movieTitle: e.target.value, error: '' })
  }

  handleFindMovie = () => {
    const { movieTitle } = this.state
    //MovieStore.getRottenTomatoesMovie()
    MovieStore.getMovies(movieTitle)
      .then(data => {
        if (!data.errors) {
          this.setState({ movieList: data, loading: false })
        }
        this.setState({ loading: false })
      })
      .catch(() => {
        this.setState({ loading: false })
      })
    this.setState({ loading: true })
  }

  render() {
    const { movieTitle, movieList, loading, scroll } = this.state

    return (
      <div id="MovieContainer">
        <div id="MovieContainerSearch">
          <div id="MovieHeader" className={scroll ? 'scroll' : ''}>
            <img src={MovieIcon} alt="movie" />
            <p>FlixFinder</p>
          </div>
          <div id="MovieInputs" className={scroll ? 'scroll' : ''}>
            <TextField
              style={{ width: '80%', color: 'white' }}
              floatingLabelText="Enter Movie:"
              onChange={this.handleChangeText}
              value={movieTitle}
            />
            <div id="MovieButton" onClick={this.handleFindMovie}>
              <p>Find Movie</p>
            </div>
          </div>
        </div>
        {loading ? (
          <div id="MovieLoading">
            <CircularProgress size={60} thickness={7} />
          </div>
        ) : (
          <div id="MovieInfoList">
            {movieList.map(movie => {
              return <MovieInfoBox key={movie.id} movie={movie} />
            })}
          </div>
        )}
      </div>
    )
  }
}
