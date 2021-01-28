import axios from "axios";

export default {
    addTweet: ({commit}, data) => {
        axios.post('tweet/', data).then(response => {
            commit('sendTweetToBackend', response.data)
        })
    },
    setMe: ({commit}) => {
        axios.get('user/').then(response => {
            commit('setMe', response.data)
        })
    }
}
