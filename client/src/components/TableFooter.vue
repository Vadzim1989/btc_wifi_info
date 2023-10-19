<template>
    <tfoot>
        <tr>
            <td colspan="5">Всего: органиций - {{uniqueAbcode(wifi)}} точек wi-fi - {{wifi.reduce((sum, {count}) => {return sum + count},0)}} из них Cisco - {{countCisco(wifi, "СISCO") + countCisco(wifi, "FREE")}}</td>
            <td class="tdNum">{{wifi.reduce((sum, {count}) => {return sum + count},0)}}</td>
        </tr>
    </tfoot>
</template>

<script>
export default {
    props: ['wifi'],
    methods: {
        countCisco(array, str) {
            const cisco = array.filter(w => w.serv_name.match(str));
            const ciscoCnt = cisco.map(({count}) => count);
            let sum = 0;
            for(var i = 0; i < ciscoCnt.length; i++){
                sum += ciscoCnt[i];
            }
            return sum
        },
        uniqueAbcode(array) {
            const abcodeCnt = array.map(({ab_code}) => ab_code);
            const abcodeSet = new Set(abcodeCnt);
            const AbCode = [...abcodeSet]
            return AbCode.length;
        }
    },
}
</script>