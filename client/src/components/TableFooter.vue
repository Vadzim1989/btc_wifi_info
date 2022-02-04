<template>
    <tfoot>
        <tr>
            <td colspan="5">Всего: органиций - {{uniqueAbcode(wifi)}} точек wi-fi - {{arraySum(wifi.map(({count}) => count))}} из них Cisco - {{countCisco(wifi, "СISCO")}}</td>
            <td class="tdNum">{{arraySum(wifi.map(({count}) => count))}}</td>
        </tr>
    </tfoot>
</template>

<script>
export default {
    props: ['wifi'],
    methods: {
        arraySum(array) {
            let sum = 0;
            for(var i = 0; i < array.length; i++){
                sum += array[i];
            }
            return sum
        },
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
            const arr = [...abcodeSet]
            return arr.length;
        }
    },
}
</script>