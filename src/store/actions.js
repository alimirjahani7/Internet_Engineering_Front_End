import axios from "axios";

export default {
    addTweet: ({commit}, payload) => {
        commit('sendTweetToBackend', payload)
    },
    setMe: ({commit}) => {
        axios.get('user/').then(response => {
            commit('setMe', response.data)
        })
    }
}
