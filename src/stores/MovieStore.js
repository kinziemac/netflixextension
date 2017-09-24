import { SourceStore } from './SourceStore'

class MovieStore {
  TMDBList = []
  IMDBList = []

  getIMDBMovie(title) {
    return new Promise((resolve, reject) => {
      fetch(SourceStore.IMDB.apiLink + title)
        .then(results => {
          return results.json()
        })
        .then(data => {
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  getTMDBMovie(title) {
    return new Promise((resolve, reject) => {
      fetch(`${SourceStore.TMBD.apiLink + title}`)
        .then(results => {
          return results.json()
        })
        .then(data => {
          resolve(data)
        })
    })
  }

  getMovies(title) {
    const lowerCaseTitle = title.toLowerCase()

    return new Promise((resolve, reject) => {
      this.getTMDBMovie(lowerCaseTitle).then(TMDBdata => {
        this.TMDBList = TMDBdata.results
        this.getIMDBMovie(lowerCaseTitle).then(IMDBdata => {
          this.IMDBList = IMDBdata
          if (this.TMDBList) {
            this.formatMovies().then(() => {
              resolve(this.TMDBList)
            })
          } else {
            reject()
          }
        })
      })
    })
  }

  //
  // TMBDList = []
  // IMDBList = []

  formatMovies() {
    return new Promise((resolve, reject) => {
      this.TMDBList.forEach(TMDBMovie => {
        this.IMDBList.forEach(IMDBMovie => {
          if (TMDBMovie.title === IMDBMovie.title) {
            TMDBMovie.imdb_rating = IMDBMovie.rating
          }
        })
      })

      resolve()
    })
  }

  // getRottenTomatoesMovie(title) {
  //   return new Promise((resolve, reject) => {
  //     fetch(`SourceStore.IMDB.apiLink${title}`)
  //       .then(results => {
  //         return results.json()
  //       })
  //       .then(data => {
  //         console.log(data)
  //         resolve(data)
  //       })
  //   })
  // }
}

const movieStore = new MovieStore()
export default movieStore
