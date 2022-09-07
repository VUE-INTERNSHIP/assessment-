<template>
    <div class="crew">
        <div class="txt">
            <span>Meet your crew</span>
            <p>Pilot</p>
            <h1>
                Victor Glover
            </h1>
            <p class="text">
                Pilot on the first operational flight of the 
                SpaceX Crew Dragon to the International Space Station. Glover
                 is a commander in the U.S. Navy where he pilots an F/A-18.He 
                 was a crew member of Expedition 64, and served as a station 
                 systems flight engineer.
            </p>
        </div>
        <div class="img">
            <img src="../view/img/image-victor-glover.png" alt="">
        </div>
    </div>
</template>


<style scoped>
    .crew{
        position: relative;
        margin: 0;
        min-height: 100vh;
        padding: 60px 1rem 0;
        width: 100%;
    color: #dbd8e0;
    display: grid;
    }
    .txt{
        position: relative;
        text-align: center;
        padding-top: 2rem;
    }
    .txt p:nth-child(2), .txt h1{
        text-transform: uppercase;
        letter-spacing: 4px;
    }
    .txt p{
        letter-spacing: 2px;
        font-weight: lighter;
    }
    .txt h1{
        font-size: 2rem;
    }
    .txt span{
        position: absolute;
        letter-spacing: 3px;
        text-transform: uppercase;
        left: 10px;
        top: 0;
    }
    h1{
        margin-bottom: 2rem;
    }
    p{
        line-height: 40px;
    }
    .crew .img{
        position: relative;
        width: 100%;
        height: 50vh;
    }
    .crew .img img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    @media screen and (min-width: 800px) {
        .crew{
            grid-template-columns: repeat(2, 1fr);
            padding-top: 6rem;
        }
        .crew .txt{
            position: relative;
            text-align: left;
            margin-left: 3rem;
        }
        .txt p{
            margin-top: 3rem;
        }
        .crew .img{
            min-height: 90vh;
        }
    }
</style>