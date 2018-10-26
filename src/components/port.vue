<template>
    <div class="port main">
            <h1 class="form-span">PORTFOLIO</h1>
        <main>
            <div class="frame"><iframe src="https://abidemit.github.io" >ABIDEMI</iframe>
            <a href="https://abidemit.github.io">ABIDEMI GITHUB PAGE</a></div>
            <div class="frame"><iframe src="https://naijafreebies.com.ng" >NAIJAFREEBIES</iframe><a href="https://naijafreebies.com.ng">NAIJAFREEBIES</a></div>
            <div class="frame"><iframe src="https://abidemi-smiley.netlify.com" >ABIDEMI SMILEY</iframe>
            <a href="https://abidemi-smiley.netlify.com">ABIDEMI SMILEY</a></div>
            <div class="frame"><iframe src="" ></iframe></div>
        </main>
    </div>
</template>

<style scoped>
iframe {
  border-radius: 5px;
  width: 100%;
  margin-bottom: 10px;
}
main {
  margin: 0 auto;
  width: 80%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
}

@media only screen and (max-width: 500px) {
  main {
    margin: 0 auto;
    display: grid;
    grid-row-gap: 5px;
    grid-template-columns: 1fr;
  }
  .port {
    height: 130vh;
    background-color: #38ce59;
  }
}
@media (max-width: 800px) and (min-width: 500px) {
  main {
    width: 50vw;
    margin: 0 auto;
    display: grid;
    grid-row-gap: 5px;
    grid-template-columns: 1fr;
  }
  .port {
    height: 120vh;
    background-color: #38ce59;
  }
}
</style>

