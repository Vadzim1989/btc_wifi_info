<template>
    <tr>
        <td class="td-zues">{{wifi.zues}}</td>
        <td class="td-name">{{wifi.firm_name}}</td>
        <td class="tdNum">{{wifi.ab_code}}</td>
        <td class="tdNum">{{wifi.unp}}</td>
        <td class="tdNum">{{wifi.serv_name}}</td>
        <td class="tdNum">{{wifi.count}}</td>
    </tr>
</template>

<script>
export default {
    props: {
        wifi: {
            type: Object
        }
    }
}
</script>

<style>
    .tdNum {
        width: 15%;
    }
    .td-zues {
        padding-left: .5%;
    }
</style>