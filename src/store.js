import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


const mapActions = Vuex.mapActions;
const mapGetters = Vuex.mapGetters;
const mapState = Vuex.mapState;

const store = new Vuex.Store({
    state: {
        count: 1,
    },
    mutations: {    //Synchrone, modifie un état à la fois
        INCREMENT: function(state) {
            state.count+=1;
        },
        DECREMENT: function(state) {
            state.count-=1;
        }
    },
    
    actions: {      //Asynchrone, peut appeler plusieurs mutations (plusieurs modifications d'états possibles)
        increment: function(context) {
            context.commit('INCREMENT');
        },
        decrement: function(context) {
            context.commit('DECREMENT');
        }
    },

    getters: {
        parity: state => state.count % 2 === 0 ? 'pair' : 'impair',
    },

});

export default {
    store,
    mapActions,
    mapGetters,
    mapState
}