export default {
    getTweets: (state) => {
        return state.tweets;
    },
    getMe: (state) => {
        return state.me;
    },
    getTrends: (state) => {
        return state.trends;
    },
    getTabs: (state) => {
        return state.tabs;
    },
    getUser: (state) => (username) => {
        let user = state.me
        user['username'] = username
        return user
    }
};
