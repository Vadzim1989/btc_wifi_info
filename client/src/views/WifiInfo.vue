<template>
    <Loader v-if="loading"/>  
        <Table  v-else-if="wifi.length"
                v-bind:wifi='filteredWifi'
                />
    <p v-else>Данных нету!</p>
</template>

<script>
    import Table from '@/components/Table';
    import Loader from '@/components/Loader';

    export default {
        name: 'WifiInfo',
        components: {
            Table,
            Loader
        },
        data() {
            return {
                wifi: [],
                loading: true,
                filterName: '',
                filterABcode: null,
                filterUnp: null
            }
        },
        computed: { 
            filteredWifi() {
                if(!this.wifi.length) return this.wifi;
                let fn = RegExp(`${this.filterName}|${this.en2ru(this.filterName)}`, 'i');
                return this.wifi.filter(w => {
                    return (!fn || w.firm_name.match(fn)) 
                            && (!this.filterABcode || w.ab_code == this.filterABcode) 
                            && (!this.filterUnp || w.unp == +this.filterUnp);
                })
            } // filtered our data
        },
        watch: {
            $route: 'fetchData'
        },
        created() {
            this.$on('set-abcode', abcode => {
                this.filterABcode = this.filterABcode == abcode ? null : abcode // второй клик - сброс
            }); // ловим событие от body
            this.$on('set-unp', unp => {
                this.filterUnp = this.filterUnp == +unp ? null : +unp // второй клик - сброс
            }); // ловим событие от body
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.loading = true;
                fetch(`http://10.245.3.132:100/api/wifiinfo/${this.$route.params.city}`)
                .then(response => response.json())
                .then(json => {
                        setTimeout(() => {
                            this.wifi = json
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

