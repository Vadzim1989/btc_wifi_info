<template>
    <div class="table_wrapper">
        <table>
            <TableHeader ref="thead"/>
            <tbody>
                <TableBody 
                    v-bind:tituls='tituls'
                    v-for="tituls in tituls" :key="tituls.id_adr"/>
            </tbody>
            <TableFooter
                v-bind:tituls='tituls'/>
        </table>
    </div>
</template>

<script>
    import TableHeader from '@/components/TableHeader';
    import TableBody from '@/components/TableBody';
    import TableFooter from '@/components/TableFooter';
    export default {
        props: ['tituls'],
        components: {
            TableHeader,
            TableBody,
            TableFooter
        }
    }
</script>

<style>
    table{
        border-collapse: collapse;
        max-width: 91vw;
        width: 100%;
        margin-left: 2%;
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
        background: #2f9ed1;
    }
    table td{
        padding: 3px 2px;
        text-align: left;
    }
    table tbody tr:nth-child(odd){
        background: #fff;
    }
    table tbody tr:nth-child(even){
        background: #c5f3fcfd
    }
    table tfoot {
        position: sticky;
        position: -webkit-sticky;
        bottom: 0;
    }
    table tfoot tr{
        font-weight: 500;
        padding: 5px;
        background: #2f9ed1;
    }
    .td-id {
        font-weight: bold;
    }
    .td-name {
        padding: 0 0 0 5px;
        font-weight: 500;
    }
    .tdNum {
        text-align: center;
    }
    .table_wrapper {
        flex: 1 1 87%;
        overflow-y: auto;
        width: 95vw;
        height: 88vh;
    }
</style>
