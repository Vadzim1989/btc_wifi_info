<template>
    <thead>
        <tr>
            <th>№ титула</th>
            <th>Район</th>
            <th><input  type="text" 
                        placeholder="Имя титула"
                        @mouseover="mouseOver"
                        v-model="filter"></th>
            <th><input  type="number" 
                        placeholder="Год ввода"
                        @mouseover="mouseOver"
                        v-model="filter"></th>
            <th>Всего розеток</th>
            <th>Занято розеток</th>
            <th>Всего квартир</th>
            <th>Квартиры PON</th>
            <th>Всего ТА</th>
            <th>ТА PON</th>
            <th>Byfly PON</th>
            <th>Zala PON</th>
            <th>Byfly_Zala PON</th>
            <th>Пакеты PON</th>
            <th>Голая телефония</th>
            <th>VPN</th>
        </tr>
    </thead>
</template>

<script>
export default {
    data() {
        return {
            filter: ''
        }
    },
    watch: {
        filter(value) {
            console.log(value)
        }
    },
    methods: {
        mouseOver(e) {
            e.currentTarget.select()
        }
    }
}
</script>

<style scoped>
    input {
        width: 90%;
    }
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>
