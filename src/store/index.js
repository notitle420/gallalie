import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    works:[
      {
        id: 1,
        title: 'おはよう',
        description: '...',
        releasedAt: new Date()
      }, {
        id: 2,
        title: 'こんにちは',
        description: '...',
        releasedAt: new Date()
      }, {
        id: 3,
        title: 'おやすみ',
        description: '...',
        releasedAt: new Date()
      },
    ]
  },
  mutations: {
    addWork(state, payload) {
      payload.id = state.nextId
      state.works.push(payload)
      state.nextId++
    },
  },
  actions: {
  },
  getters: {
    works(state) {
      return state.works
    },
    workById(state) {
      return function (_id) {
        var work = state.works.find(work => work.id === _id)
        if (work) {
          return work
        }
        console.error('work not found')
      }
    }
  }
})
