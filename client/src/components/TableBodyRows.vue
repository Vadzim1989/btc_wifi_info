<template>
    <tr key='{{tituls.id_adr}}'>
        <td class="tdNum td-id">{{tituls.id_adr}}</td>
        <td>{{tituls.zues}}</td>
        <td class="td-name">{{tituls.name_titul}}</td>
        <td class="tdNum">{{tituls.god_vvod}}</td>
        <td class="tdNum">{{tituls.all_socket}}</td>
        <td class="tdNum">{{tituls.check_socket}}</td>
        <td class="tdNum">{{tituls.kv_all}}</td>
        <td class="tdNum">{{tituls.kv_pon}}</td>
        <td class="tdNum">{{tituls.ta_all}}</td>
        <td class="tdNum">{{tituls.ta_pon}}</td>
        <td class="tdNum">{{tituls.byfly_pon}}</td>
        <td class="tdNum">{{tituls.zala_pon}}</td>
        <td class="tdNum">{{tituls.byfly_zala_pon}}</td>
        <td class="tdNum">{{tituls.packet_pon}}</td>
        <td class="tdNum">{{tituls.phone_null_pon}}</td>
        <td class="tdNum">{{tituls.vpn}}</td>
    </tr>
</template>

<script>
export default {
    props: {
        tituls: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
    .tdNum {
        width: 3%;
    }
</style>