import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

// pas besoin de les exporter
//
// const mapActions = Vuex.mapActions;
// const mapGetters = Vuex.mapGetters;
// const mapState = Vuex.mapState;

// dans les mutations et actions met directement une fonction et pas une fonction assigné à une variable
// ex INCREMENT: function(state) → INCREMENT(state)

// besoin d'export directement le store et pas la constante je ne sais pas pourquoi
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
