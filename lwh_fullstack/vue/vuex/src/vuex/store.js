import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  add(state) {
    state.count++;
    console.log('add');
  },

  reduce(state) {
    state.count--;
  }
}


const getters = {
  newCount: (state) => {
    return state.count ** 2
  }
}

const actions = {
  addAction(contex) {
    contex.commit('add')
    console.log('actions');
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})