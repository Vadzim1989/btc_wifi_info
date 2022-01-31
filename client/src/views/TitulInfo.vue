<template>
    <Loader v-if="loading"/>      
        <Table  v-else-if="tituls.length"
                v-bind:tituls='tituls'
                />
    <p v-else>Данных нету!</p>
</template>

<script>
    import Table from '@/components/Table';
    import Loader from '@/components/Loader';

    export default {
        name: 'TitulInfo',
        components: {
            Table,
            Loader
        },
        data() {
            return {
                tituls: [],
                loading: true,
                filter: ''
            }
        },
        watch: {
            $route: 'fetchData'
        },
        created() {
            this.fetchData()
        },
        methods: {
            fetchData() {
                fetch(`http://10.245.3.132:99/api/titulinfo/${this.$route.params.city}`)
                .then(response => response.json())
                .then(json => {
                        setTimeout(() => {
                            this.tituls = json
                            this.loading = false
                    },100);
                })
            }
        },
    }
</script>

<style scoped>
    p {
        text-align: center;
    }
</style>    

