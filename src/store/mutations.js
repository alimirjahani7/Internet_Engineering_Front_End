export default {
  sendTweetToBackend: (state, tweet) => {
    state.tweets.push(tweet)
  },
  setMe: (state, me) => {
    state.me = me;
  }
}
