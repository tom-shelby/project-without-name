<template>

    <div id="app">
        <h1>Compteur</h1>
        
        {{ this.$store.count }} est {{ this.$store.parity}}
        <hr>
        <button @click="increment">Incrémenter</button>
    </div>
</template>

<script>



import { mapActions, mapGetters, mapState } from 'vuex';


export default {
    //Component's name
    name: 'HomePage',
    mounted: function () {
        console.log('HomePage Mounted');
    },
    computed: {
        ...mapState([
            'count',
        ]),
        ...mapGetters([
            'parity',
        ])
    },
    methods: {
        ...mapActions([
            'increment',
            'decrement',
        ])
    }
}
</script>

