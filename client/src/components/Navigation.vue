<template>
    <div class="nav_wrapper">
        <img src="../assets/logo_btk.png" alt="logo_btk">
        <ul class='nav'>
            <li><router-link to="/ ">Гомельский филиал</router-link></li>
            <li v-for="(name, link, index) in $parent.cities" :key="index"><router-link :to="'/'+link">{{name}}</router-link></li>
        </ul>
    </div>
</template>

<style>
    .nav_wrapper {
        max-height: 85vh;
        overflow-y: auto;
    }
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
    
    li:first-child {
        border-top: 2px solid black;
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
    @media screen and (max-width:1850px){
        li {
            font-size: .6rem;
        }
        ul {
            width: 8.5vw;
        }
        li a {
            padding: 1% 1%;
        }
        .nav_wrapper {
            margin-right: 1%;
            overflow-x: hidden;
        }
    }
</style>