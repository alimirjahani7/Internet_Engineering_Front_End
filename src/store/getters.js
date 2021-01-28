export default {
    getTweets: (state) => {
        return state.tweets;
    },
    // getMe: (state) => {
    //     return state.me
    // },
    getUser: (state) => {
        return state.me
    },
    getTrends: (state) => {
        return state.trends;
    },
    getTabs: (state) => {
        return state.tabs;
    },
    getMe: (state) => {
        let user = state.me
        return user
    }
};
