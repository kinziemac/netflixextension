import { SourceStore } from './SourceStore'

class MovieStore {
  getIMDBMovie(title) {
    return new Promise((resolve, reject) => {
      fetch(SourceStore.IMDB.apiLink)
        .then(results => {
          return results.json()
        })
        .then(data => {
          console.log(data)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  getTMBDMovie(movieTitle) {
    return new Promise((resolve, reject) => {
      fetch(`${SourceStore.TMBD.apiLink + movieTitle}`)
        .then(results => {
          return results.json()
        })
        .then(data => {
          console.log(data)
          resolve(data)
        })
    })
  }

  getRottenTomatoesMovie() {
    return new Promise((resolve, reject) => {
      fetch(SourceStore.IMDB.apiLink)
        .then(results => {
          return results.json()
        })
        .then(data => {
          console.log(data)
          resolve(data)
        })
    })
  }
}

const movieStore = new MovieStore()
export default movieStore
