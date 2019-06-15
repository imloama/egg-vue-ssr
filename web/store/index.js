import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state:{
      count: 0
    },
    actions:{
      INCREASE({ commit, dispatch, state }){
        commit('increaseCount')
      }
    },
    mutations: {
      increaseCount(state){
        state.count += 1
      }
    }
  })
}