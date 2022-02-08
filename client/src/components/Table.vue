<template>
    <div class="table_wrapper">
        <export-excel
            class='btn_excel'
            :data='wifi'
            :fields="json_fields"
            name="wifi_info.xls">
            <img src="../assets/down_excel.png" alt="excel_download" class="down_logo">
        </export-excel>
        <table>
            <TableHeader ref="thead"/>
            <tbody>
                <TableBodyRows 
                    v-bind:wifi='wifi'
                    v-for="(wifi, index) in wifi" :key="index"/>
            </tbody>
            <TableFooter
                v-bind:wifi='wifi'/>
        </table>
    </div>
</template>

<script>
    import TableHeader from '@/components/TableHeader';
    import TableBodyRows from '@/components/TableBodyRows';
    import TableFooter from '@/components/TableFooter';
    export default {
        props: ['wifi'],
        data() {
            return {
                json_fields: {
                'Структурное подразделение': 'zues',
                'Код абонента': 'ab_code',
                'Название организации': 'firm_name',
                'УНП': 'unp',
                'Количество точек': 'count',
                'Код услуги': 'serv_id_code',
                'Название услуги': 'serv_name'
                }
            }
        },
        components: {
            TableHeader,
            TableBodyRows,
            TableFooter
        }
    }
</script>

<style>
    table{
        border-collapse: collapse;
        max-width: 91.5vw;
        width: 100%;
        margin-left: 1.5%;
        margin-bottom: 20px;
        font-size: .7rem;
    }
    table thead {
        position: sticky;
        position: -webkit-sticky;
        top: -1px;
    }
    table th:first-child{
        border-top-left-radius: 10%;
    }
    table th:last-child{
        border-top-right-radius: 10%;
    }
    table th {
        font-weight: 500;
        padding: 5px;
        background: #78a04a;
    }
    table td{
        text-align: left;
    }
    table tbody tr:nth-child(odd){
        background: #fff;
    }
    table tbody tr:nth-child(even){
        background: #acc796fd
    }
    table tfoot {
        position: sticky;
        position: -webkit-sticky;
        bottom: 0;
    }
    table tfoot tr{
        font-weight: 500;
        padding: 5px;
        background: #78a04a;
        font-size: 1rem;
    }
    .td-name {
        text-align: center;
        padding: .4% .4%;
        font-weight: 500;
    }
    .tdNum {
        text-align: center;
        font-size: .8rem;
    }
    .table_wrapper {
        flex: 1 1 87%;
        overflow-y: auto;
        width: 94vw;
        height: 88vh;
    }
    .btn_excel {
        margin-left: 1%;
        cursor: pointer;
        max-width: 1.1%;
        padding-left: .5%;
    }
    .btn_excel:hover {
        transform: scale(1.2);
        transition: .2s all ease;
    }
    .down_logo {
        width: 80%;
    }
    @media screen and (max-width:1850px){
        table {
            font-size: .6rem;
            margin-left: 0;
        }
        .table_wrapper {
            width: 91vw;
        }
        .tdNum {
            font-size: .6rem;
        }
        input {
            font-size: .5rem;
        }
    }
</style>
