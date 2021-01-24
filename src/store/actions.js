export default {
  addTweet: ({ commit }, payload) => {
    commit('sendTweetToBackend', payload)
  }
}
