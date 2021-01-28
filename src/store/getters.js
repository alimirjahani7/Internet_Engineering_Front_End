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
    getMe: (state) => (username) => {
        let user = state.me
        console.log(state.me)
        console.log(username);
        return user
    }
};
