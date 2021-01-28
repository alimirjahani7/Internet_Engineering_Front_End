import axios from "axios";

export default {
    addTweet: ({commit}, data) => {
        axios.post('tweet/', data).then(response => {
            commit('setMe', response.data)
        })
        commit('sendTweetToBackend', data)
    },
    setMe: ({commit}) => {
        axios.get('user/').then(response => {
            commit('setMe', response.data)
        })
    }
}
