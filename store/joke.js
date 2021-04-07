import axios from 'axios';

export const state = () => ({
    jokes: [],
    joke: {}
})

export const actions = {
    async fetchJokes({commit, rootState}){
        await axios.get("https://icanhazdadjoke.com/search", rootState.config)
        .then(res => {
            commit('setJokes', res.data.results)
        })
        .catch(err => {
            console.log("(Error fetch jokes)", err);
        })
    },

    async fetchJoke({commit, rootState}, id){
        await axios.get(`https://icanhazdadjoke.com/j/${id}`, rootState.config)
        .then(res => {
            commit('setJoke', res.data)
        })
        .catch(err => {
            console.log("(Error fetch joke)", err);
        })
    },

    async fetchSearchJokes({commit, rootState}, text){
        await axios.get(`https://icanhazdadjoke.com/search?term=${text}`, rootState.config)
        .then(res => {
            commit('setJokes', res.data.results)
        })
        .catch(err => {
            console.log("(Error search jokes)", err);
        })
    },
}

export const mutations = {
    setJokes(state, jokes){
        state.jokes = jokes
    },
    setJoke(state, joke){
        state.joke = joke
    }
}