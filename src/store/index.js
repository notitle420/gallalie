import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    works: [
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
    ],
    artists: [
      {
        id: 1,
        name: 'mitsuhashi tomiko',
        major: '油絵',
        old: 21,
        concept: '墨',
        like: 200,
        view: 200,
        numberofworks: 15
      },
      {
        id: 2,
        name: 'mitsubachi bunbun',
        major: '洋画',
        old: 34,
        concept: 'カラフル',
        like: 1300,
        view: 2500,
        numberofworks: 95
      },
    ],
    userStatus: {
      loggedIn: false,
    }
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
    },
    artists(state) {
      return state.artists
    },
    artistById(state) {
      return function(_id) {
        var artist = state.artists.find(artist => artist.id === _id)
        if(artist) {
          return artist
        }
        console.error('artist not found')
      }
    },
    userStatus(state) {
      return state.userStatus
    }
  },
  mutations: {
    setLoggedIn(state, value) {
      state.userStatus.loggedIn = value;
    },
    setUser(state, data) {
      state.userStatus.data = data;
    }
  },
  actions: {
    fetchUser({ commit }, userStatus) {
      commit('setLoggedIn', userStatus !== null);
    }
  },
})
