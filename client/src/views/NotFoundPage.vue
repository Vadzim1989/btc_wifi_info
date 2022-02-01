<template>
    <div class="not_page_wrapper">        
        <div class="not_page">
            <h1>Добро пожаловать!</h1>
            <router-link to='/ '>Начать работу</router-link>
        </div>
    </div>
</template>

<style>
    .not_page_wrapper {
        background: rgb(174,214,238);
        background: radial-gradient(circle, rgba(174,214,238,1) 0%, rgba(148,233,232,1) 100%);
        position: relative;
        left: 2%;
        max-width: 100%;
        width: 90vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .not_page {
        text-align: center;
        position: relative;
    }
    .not_page a {
        text-decoration: none;
        border: 2px solid black;
        padding: 2%;
    }
    .not_page a:hover {
        background-color: #94fd94;
        color: black;
    }
    @media screen and (max-width:1840px) {
        .not_page_wrapper {
            margin-top: 5%;
        }
    }
</style>