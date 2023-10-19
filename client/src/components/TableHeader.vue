<template>
    <thead ref="thead">
        <tr>
            <th>УЭС</th>
            <th><input  type="text" 
                        placeholder="Название организации"
                        v-afocus
                        v-mfocus                        
                        v-model="$parent.$parent.filterName"
                        @keydown.esc="$parent.$parent.filterName=''"></th>
            <th><input  type="number" 
                        placeholder="Код абонента"
                        v-mfocus                        
                        v-model="$parent.$parent.filterABcode"
                        @keydown.esc="$parent.$parent.filterABcode=''"></th>
            <th><input  type="number" 
                        placeholder="УНП"
                        v-mfocus                        
                        v-model="$parent.$parent.filterUnp"
                        @keydown.esc="$parent.$parent.filterUnp=''"></th>
            <th>Название услуги</th>
            <th>Колчество точек</th>
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
