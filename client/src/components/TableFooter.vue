<template>
    <tfoot>
        <tr>
            <td colspan="5">Всего: органиций - {{wifi.map(({ab_code}) => ab_code).length}} точек wi-fi - {{arraySum(wifi.map(({count}) => count))}}</td>
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
        }
    },
}
</script>