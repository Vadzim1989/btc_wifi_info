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
            <th>Код абонента</th>
            <th>УНП</th>
            <th>Название услуги</th>
            <th>Колчество точек</th>
        </tr>
    </thead>
</template>


<style scoped>
    input {
        width: 90%;
    }
</style>
