export default {
  addTweet: ({ commit }, payload) => {
    commit('sendTweetToBackend', payload)
  },
  setMe: (context, me) => {
    context.commit('setMe', me);
  }
}
