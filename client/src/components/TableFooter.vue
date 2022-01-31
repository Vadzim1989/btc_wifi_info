<template>
    <tfoot>
        <tr>
            <td colspan="4">Всего: {{tituls.map(({id_adr}) => id_adr).length}} титулов</td>
            <td class="tdNum">{{arraySum(tituls.map(({all_socket}) => all_socket))}}</td>
            <td class="tdNum">{{arraySum(tituls.map(({check_socket}) => check_socket))}}</td>
            <td class="tdNum">{{arraySum(tituls.map(({kv_all}) => kv_all))}}</td>
            <td class="tdNum">{{arraySum(tituls.map(({kv_pon}) => kv_pon))}}</td>
            <td class="tdNum">{{arraySum(tituls.map(({ta_all}) => ta_all))}}</td>
            <td class="tdNum">{{arraySum(tituls.map(({ta_pon}) => ta_pon))}}</td>
            <td class="tdNum">{{arraySum(tituls.map(({byfly_pon}) => byfly_pon))}}</td>
            <td class="tdNum">{{arraySum(tituls.map(({zala_pon}) => zala_pon))}}</td>
            <td class="tdNum">{{arraySum(tituls.map(({byfly_zala_pon}) => byfly_zala_pon))}}</td>
            <td class="tdNum">{{arraySum(tituls.map(({packet_pon}) => packet_pon))}}</td>
            <td class="tdNum">{{arraySum(tituls.map(({phone_null_pon}) => phone_null_pon))}}</td>
            <td class="tdNum">{{arraySum(tituls.map(({vpn}) => vpn))}}</td>
        </tr>
    </tfoot>
</template>

<script>
export default {
    props: ['tituls'],
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