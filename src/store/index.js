import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favouriteJokes: [],
  },
  getters: {
    getFavouriteJokes: state => {
      return state.favouriteJokes
    }
  },
  mutations: {
    addFavouriteJoke(state, payload){
      state.favouriteJokes.unshift(payload)
    },
    removeFavouriteJoke(state, payload){
      if (state.favouriteJokes.indexOf(payload) > -1){
        state.favouriteJokes.splice(state.favouriteJokes.indexOf(payload), 1)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
