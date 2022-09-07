<template>
    <div class="home">
        <div>
            <p class="txt">So you want to travel to </p>
        <h1>Space</h1>
        <p class="cont">
            Let’s face it; if you want to go to space, you might
            as well genuinely go to outer space and not hover kind
            of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
        </p>
        </div>
        <h2>EXPLORE</h2>
    </div>
</template>

<style scoped>
    .home{
        position: relative;
        margin-top: 0;
        padding: 5rem 2rem 0;
        min-height: 100vh;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        color: #dbd8e0;
    }
    .home > div{
        flex: 800px 1;
        max-width: 600px;
    }
    .txt{
        font-size: 30px;

    }
    h1{
        font-size: 4rem;
        text-transform: uppercase;
        letter-spacing: 4px;
        margin-bottom: 1rem;
        color: #fff;
    }
    .cont{
        line-height: 40px;
        margin-bottom: 3rem;
    }
    h2{
        position: relative;
        background-color: #fff;
        display: inline-block;
        color: #000;
        padding:6rem 3rem;
        border-radius: 50%;
    }
    @media screen and (max-width: 800px) {
        h2{
            left: 50%;
            transform: translateX(-50%);
        }
        .cont > div{
            widows: 100%;
        }
    }
    @media screen and (min-width:800px) {
        .home{
            padding: 5rem;
        }
        .home > div{
            text-align: left;
        }
        .home > div h1{
            font-size: 7rem;
            letter-spacing: 8px;
        }
        .home .txt{
            letter-spacing: 4px;
        }
    }
</style>