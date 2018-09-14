<template>
    <div class="port main">
            <h1 class="form-span">PORTFOLIO</h1>
        <main>
            <div class="frame"><iframe src="" >ABIDEMI</iframe></div>
            <div class="frame"><iframe src="" >NAIJAFREEBIES</iframe></div>
            <div class="frame"><iframe src="" ></iframe></div>
            <div class="frame"><iframe src="" ></iframe></div>
        </main>
    </div>
</template>

<style scoped>

iframe{
    border-radius: 5px;
    width: 100%;
}
main{
    margin: 0 auto;
    width: 80%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr
}

@media only screen and (max-width: 500px){
    main {
    margin: 0 auto;
    display: grid;
    grid-row-gap: 5px;
    grid-template-columns: 1fr;
}
.port{
    height: 130vh;
    background-color: #38ce59;
}
}
@media  (max-width: 800px) and (min-width: 500px){
    main {
        width: 50vw;
    margin: 0 auto;
    display: grid;
    grid-row-gap: 5px;
    grid-template-columns: 1fr;
}
.port{
    height: 120vh;
    background-color: #38ce59;
}
}
</style>

