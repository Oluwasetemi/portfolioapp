<template>
    <div class="about main">
        <h1 class="form-span">ABOUT</h1>
        <main>
            <div class="details">
                <p>A bright, talented and ambitious Frontend Developer with a strong 
                   self-discipline and good work ethic. Possess a deep love for
                   writing and teaching of  JavaScript Code. Have passion to work with emerging web technologies and building products with production
                   ready awareness and grit. Have a good team
                   spirit, deadline oriented and having the ability to organize, present complex solutions clearly and
                   accurately.
                   Looking for a suitable position where I can become a better developer with an exciting and
                   innovative company that offers room for progression and building of maintainable products with collaborative
                   efforts.
                   I have been involved with building a tech community here in Ibadan.
                </p>
                <p>Born & Raised in Ibadan, Oyo State also an indigene of Abeokuta-North, Ogun State.
                   Graduated from <span class="pspan">Tai-Solarin University of Education (2016).</span>
                   I enjoy writing code and solving Problems, 
                   playing Video Games,
                   surfing the web, writing rap lyrics 
                   and listening to music.
                   Presently Working at <span class="pspan"> Edulight Consulting</span>
                   as a Frontend Developer and an I.T Trainer
                </p>
            </div>
        </main>
    </div>
</template>

<style scoped>
    .details{
        width: 80%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
        margin: 0 auto;
        padding: 5px;
        text-align: justify;
    }
    
    @media only screen and (max-width: 500px){
    .details {
    
    display: grid;
    grid-row-gap: 10px;
    grid-template-columns: 1fr ;
}
main{
        height: 100vh;
        background-color: #38ce59;
    }

}
@media only screen and (max-width: 800px) {
    .details{
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 15px;
        margin: 0 auto;
        padding: 5px;
        text-align: justify;
}
main{
        height: 150vh;
        background-color: #38ce59;
    }
}
</style>


