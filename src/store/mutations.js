export default {
    sendTweetToBackend: (state, tweet) => {
        state.tweets.push(tweet)
    },
    setMe: (state, me) => {
        let old_me = state.me
        state.me = me;
        state.me.profile_image = old_me.profile_image
    },
    setTweets: (state, tweets) => {
        state.tweets = tweets
    }
}
