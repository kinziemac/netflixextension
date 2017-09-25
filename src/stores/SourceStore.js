export const SourceStore = {
  TMBD: {
    apiLink: `https://api.themoviedb.org/3/search/multi?api_key=7d3aecc225c7ce967b29649308f87e4c&query=`,
    apiKey: '7d3aecc225c7ce967b29649308f87e4c',
    apiReadAccessToken:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDNhZWNjMjI1YzdjZTk2N2IyOTY0OTMwOGY4N2U0YyIsInN1YiI6IjU5YzVkOTAyOTI1MTQxNWI1NDAzODEzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hsrOF1PqJ_igJL_TuxuGb5Zxy9oClPDnLKBHI_57PZ0'
  },
  ROTTEN_TOMATOES: {
    apiMovie:
      'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey=9htuhtcb4ymusd73d4z6jxcj',
    apiKey: '9htuhtcb4ymusd73d4z6jxcj'
  },
  IMDB: {
    apiLink: 'http://www.theimdbapi.org/api/find/movie?title=',
    apiKey: ''
  }
}
