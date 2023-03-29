import { createStore } from 'vuex'

const getDefaultState = () => {
  return {
    vh: window.innerHeight * 0.01
  }
}

export default createStore({
  state: getDefaultState(),
  getters: {
    getVh: (state) => {
      return state.vh
    }
  },
  mutations: {
    SET_VH: (state, vh) => {
      state.vh = vh
    }
  }
})
