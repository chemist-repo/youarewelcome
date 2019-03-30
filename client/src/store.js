import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const apiUrl = ''

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chat: []
  },
  mutations: {
    SET_CHAT (state, data) {
      state.chat.push(data)
    }
  },
  actions: {
    getAnswer ({ commit }, q) {
      return new Promise((resolve, reject) => {
        // try {
        //   commit('SET_CHAT', {
        //     type: 'answer',
        //     data: q
        //   })
        //   resolve('test')
        // } catch (err) {
        //   reject(err)
        // }
        let formData = new FormData()
        formData.set('q', q)
        axios({
          method: 'post',
          url: `${apiUrl}/api/get-answer`,
          data: formData,
          config: {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        }).then(res => {
          commit('SET_CHAT', {
            type: 'answer',
            data: res.data.a
          })
          resolve(res.data.a)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
})
