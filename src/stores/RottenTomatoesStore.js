class RottenTomatoesStore {
  getMovieRating(title) {
    return new Promise((resolve, reject) => {
      fetch('http://netflixroulette.net/api/api.php?title=Attack%20on%20titan')
        .then(results => {
          return results.json()
        })
        .then(data => {
          console.log(data)
        })
    })
  }

  eraseMovie() {
    console.log('remove')
  }
}

const rottenTomatoesStore = new RottenTomatoesStore()
export default rottenTomatoesStore
