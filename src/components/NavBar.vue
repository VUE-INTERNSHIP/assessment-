<template>
    <nav>
        <ul>
            <li class="logo">Logo</li>
        </ul>
        <ul class="link">
            <li><router-link to='/'>Home</router-link> </li>
            <li><router-link to='/destination'>Destination</router-link></li>
            <li><router-link to='/crew'>Crew</router-link></li>
        </ul>
    </nav>
</template>



<style scoped>
    nav{
        position: fixed;
        width: 100%;
        height: 50px;
        display: flex;
         background: hsl(0 0% 100% / .04);
        backdrop-filter: blur(2rem);
        justify-content: space-between;
        padding: 1.5rem 20px;
        align-items: center;
        z-index: 10000000;
    }
    ul{
        position: relative;
        list-style: none;
        padding: 0;
        margin: 0;
    }
    ul .logo{
        font-size: 28px;
        text-transform: uppercase;
        font-weight: bold;
        color: #000;
        letter-spacing: 3px;
    }
    .link{
        display: flex;
    }
    .link li a{
        position: relative;
        margin-left: 20px;
        text-decoration: none;
        color: #fff;
        letter-spacing: 2px;
    }
    .link li a:hover:after{
        content: '';
        position: absolute;
        height: 2px;
        width: 100%;
        background-color: #fff;
        left: 0;
        bottom: -1rem;
    }
</style>