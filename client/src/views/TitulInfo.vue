<template>
    <Loader v-if="loading"/>  
        <Table  v-else-if="tituls.length"
                v-bind:tituls='filteredTituls'
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
                filterName: '',
                filterYear: null
            }
        },
        computed: { 
            filteredTituls() {
                if(!this.tituls.length) return this.tituls;
                let fn = RegExp(`${this.filterName}|${this.en2ru(this.filterName)}`, 'i');
                return this.tituls.filter(t => {
                    return (!fn || t.name_titul.match(fn)) &&
                        (!this.filterYear || t.god_vvod == this.filterYear);
                })
            } // filtered our data
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
            },
            en2ru: str => {  //qwerty => йцукенг encoding en to rus
                if(!str) return str;
                let conv = {
                    ru: "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя",
                    en: `F<DULT~:PBQRKVYJGHCNEA{WXIO}SM">Z`+"f,dult`;pbqrkvyjghcnea[wxio]sm'.z"
                }, res = "";
                // if(!String(str).match(RegExp(`[${conv.en.replace(/[\[\]]/g,"\$&")}]`))) return str;  //строка не содержит англ.
                for(let c of String(str)) res += conv.ru[conv.en.indexOf(c)]||c;
                return res;
                }//fu
        },
    }
</script>

<style scoped>
    p {
        text-align: center;
    }
</style>    

