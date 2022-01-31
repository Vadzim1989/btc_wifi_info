<template>
    <ul class='nav'>
        <li><router-link to='/ '>Гомельский филиал</router-link></li>
        <li><router-link to='/gomel'>Гомель</router-link></li>
        <li><router-link to='/gomelzues'>Гомельский</router-link></li>
        <li><router-link to='/buda'>Буда-Кошелевски</router-link></li>
        <li><router-link to='/dobrush'>Добрушский</router-link></li>
    </ul>
</template>

<style>
    ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 6vw;
    }

    li a {
    display: block;
    color: #000;
    padding: 4% 8%;
    text-decoration: none;
    background-color: #dbf1ff;
    font-size: .8rem;
    border-bottom: 2px solid black;
    }

    li a:hover {
    background-color: #b7e69a;
    color: #727171;    
    font-weight: 500;
    border-left: 5px solid #2f9ed1;
    transition: .3s all linear;
    }

    ul a.router-link-exact-active {
        color: #fff;
        background: #2f9ed1;
        font-weight: 500;
        border-left: 5px solid #88d359;
    }
</style>