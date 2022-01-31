<template>
    <thead ref="thead">
        <tr>
            <th>№ титула</th>
            <th>Район</th>
            <th><input  type="text" 
                        placeholder="Имя титула"
                        v-afocus
                        v-mfocus
                        v-model="$parent.$parent.filterName"
                        @keydown.esc="$parent.$parent.filterName=''"></th>
            <th><input  type="number" 
                        placeholder="Год ввода"
                        min="2000"
                        v-mfocus
                        v-model.number="$parent.$parent.filterYear"
                        @keydown.esc="$parent.$parent.filterYear=''"
                        ></th>
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
