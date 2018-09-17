<template>
  <div class="portfolio main">
    
    <main>
      <div >
        <img class="img" src="@/assets/i.jpg" alt="Myimage">
      </div>
        
      <div>
        <h1 class="heading">HELLO, I'm Tiamiyu Abidemi</h1>
        </div>
       <h2>Front-End Developer</h2>
    </main>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img {
  margin-top: 70px;
  height: 240px;
  width: 240px;
  border-radius: 50%;
}
main {
  display: grid;
  grid-template-rows: 3fr .5fr 1fr ;
  text-align: center;
  grid-row-gap: 5px;
  height: 88.4vh;
}

</style>
