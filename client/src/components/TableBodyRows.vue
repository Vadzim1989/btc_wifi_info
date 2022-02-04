<template>
    <tr>
        <td class="td-zues">{{wifi.zues}}</td>
        <td class="td-name">{{wifi.firm_name}}</td>
        <td class="tdNum hot"
            @click="$parent.$parent.$emit('set-abcode', wifi.ab_code)">{{wifi.ab_code}}</td>
        <td class="tdNum hot"
            @click="$parent.$parent.$emit('set-unp', wifi.unp)">{{wifi.unp}}</td>
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
    .hot:hover {
        cursor: pointer;
        background: rgb(124,180,58);
        background: linear-gradient(90deg, rgba(124,180,58,0.09894397212009809) 0%, rgba(63,210,39,0.6899803866859244) 50%, rgba(124,180,58,0.1) 100%);
        font-weight: bold;
    }
</style>