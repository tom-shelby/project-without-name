import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 1,
    },
    mutations: {    //Synchrone, modifie un état à la fois
        INCREMENT(state) {
            state.count+=1;
        },
        DECREMENT(state) {
            state.count-=1;
        }
    },
    
    actions: {      //Asynchrone, peut appeler plusieurs mutations (plusieurs modifications d'états possibles)
        increment(context) {
            context.commit('INCREMENT');
        },
        decrement(context) {
            context.commit('DECREMENT');
        }
    },

    getters: {
        parity: state => state.count % 2 === 0 ? 'pair' : 'impair',
    },

});