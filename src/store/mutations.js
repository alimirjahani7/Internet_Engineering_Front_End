export default {
  sendTweetToBackend: (state, tweet) => {
    state.tweets.push(tweet)
  }
}
