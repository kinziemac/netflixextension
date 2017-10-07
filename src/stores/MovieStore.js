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
        console.log(this.TMDBList)
        //this.getIMDBMovie(lowerCaseTitle).then(IMDBdata => {
        // console.log(IMDBdata)
        // this.IMDBList = IMDBdata
        // if (this.TMDBList) {
        //   this.formatMovies().then(() => {
        resolve(this.TMDBList)
        //   })
        // } else {
        //   reject()
        // }
        //})
      })
    })
  }

  //TODO: I have no idea if this works but it should work
  getMedia(id, type) {
    let mediaType = 'movie'
    switch (type) {
      case 'tv':
        mediaType = 'tv'
        break
      default:
        break
    }

    return new Promise((resolve, reject) => {
      fetch(
        `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${SourceStore
          .TMDB.apiKey}&language=en-US`
      )
        .then(results => {
          return results.json()
        })
        .then(data => {
          console.log(data)
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
