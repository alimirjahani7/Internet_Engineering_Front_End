export default {
    getTweets: (state) => {
        return state.tweets;
    },
    getMyTweets: (state) => {
        return state.myTweets;
    },
    getMe: (state) => {
        return state.me;
    },
    getTrends:(state) => {
        return state.trends;
    },
};
