import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favouriteJokes: [],
    dateTimes: []
  },
  getters: {
    getFavouriteJokes: state => {
      return state.favouriteJokes
    },
    getDateTimes: state => {
      return state.dateTimes
    }
  },
  mutations: {
    addFavouriteJoke(state, payload){
      state.favouriteJokes.unshift(payload)
      state.dateTimes.unshift(new Date().toLocaleTimeString() + ' ' + new Date().toLocaleDateString())
    },
    removeFavouriteJoke(state, payload){
      if (state.favouriteJokes.indexOf(payload) > -1){
        state.dateTimes.splice(state.favouriteJokes.indexOf(payload), 1)
        state.favouriteJokes.splice(state.favouriteJokes.indexOf(payload), 1)
      }
    }
  }
})
