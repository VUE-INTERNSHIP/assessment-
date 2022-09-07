<template>
    <div class="about">
        <div class="img">
            <p>pick your destination</p>
            <div><img src='./img/image-mars.png' alt="mars"></div>
        </div>
        <div class="cont">
            <h1>mars</h1>
            <p>
                Don’t forget to pack your hiking boots. You’ll need 
                them to tackle Olympus Mons, the tallest planetary 
                mountain in our solar system. It’s two and a 
                half times the size of Everest!
            </p>
            <div>
                <p><span>Avg. distance</span><br> 225 mil. km</p>
                <p><span>Est. travel time </span><br> 9 months</p>
            </div>
        </div>
    </div>
</template>


<style scoped>
    div.about{
        margin: 0;
        position: relative;
        padding:  3rem 1rem ;
        display: grid;
        color: #dbd8e0;
    }
     .img{
        margin-top: 15px;
    }
    .cont p{
        letter-spacing: 1px;
        line-height: 40px;
    }
    .img p{
        text-transform: uppercase;
        letter-spacing: 3px;
    }
    .img > div{
        margin: 0 auto;
        width: 400px;
        height: 60vh;
        /* padding: 0 40px; */
        position: relative;
    }
    .img > div img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
         /* width: 400px;
        height: 400px; */
    }
    .cont h1{
        text-transform: uppercase;
        font-size: 3rem;
        margin: 2rem;
        letter-spacing: 6px;
    }
    .about .cont{
        text-align: center;
    }
    .about .cont h1{
        color: #fff;
    }
    .about .cont > div p {
        font-weight: bold;
        letter-spacing: 2px;
    }
    .about .cont > div p span{
        font-weight: lighter;
    }
    @media screen and (min-width: 800px) {
        div.about{
            grid-template-columns: repeat(2, 1fr);
            column-gap: 20px;
            padding: 3rem 4rem;
        }
        .about .cont{
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            /* min-height: 100vh; */
            /* padding-top: 3rem; */
            margin-top: 3rem;
        }
                .about .cont h1{
                    font-size: 4rem;
                    letter-spacing: 7px;
                }
        .about .cont > div{
            display: flex;
            justify-content: space-evenly;
        }
        .about .cont > p{
            text-align: left;
        }
      
        .img > div{
            width: 100%;
            min-height: 100vh;
        }
        .img > div img{
            width: 400px;
            height: 400px;
        }
    }
</style>