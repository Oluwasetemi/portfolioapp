<template>
    <div class="skills main">
            <h1 class="form-span">SKILLS</h1>
        <main>
                <h1 class="head">TECHNICAL SKILLS</h1>
            <div class="tech"> 
                <div>
                <label for="">HTML5</label>
                <progress max="100" value="80">80%</progress>
            </div>
            <div>
                <label for="">CSS3</label>
                <progress max="100" value="60">60%</progress>
            </div>
            <div>
                <label for="">JavaScript</label>
                <progress max="100" value="50">50%</progress>
            </div>
            <div>
                <label for="">Vue Js</label>
                <progress max="100" value="60">60%</progress>
            </div>
            <div>
                <label for="">Git</label>
                <progress max="100" value="60">60%</progress>
            </div>
            <div>
                <label for="">WordPress</label>
                <progress max="100" value="70">70%</progress>
            </div>
            <div>
                <label for="">Figma</label>
                <progress max="100" value="30">30%</progress>
            </div>
            <div>
                <label for="">OpenCart</label>
                <progress max="100" value="80">80%</progress>
            </div>
            <div>
                <label for="">Canva</label>
                <progress max="100" value="60">60%</progress>
            </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
progress[value] {
  padding: 20px;
  width: 200px;
}

.tech {
  /* width: 80%; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 20px;
  justify-items: center;
}
.head {
  text-align: center;
}
label {
  display: block;
}

@media only screen and (max-width: 500px) {
  .tech {
    /* width: 80%; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    padding: 10px;
  }
  progress[value] {
    padding: 10px;
    width: 150px;
  }
}
@media (min-width: 500px) and (max-width: 800px) {
  progress[value] {
    padding: 20px;
    width: 150px;
  }
}
</style>
