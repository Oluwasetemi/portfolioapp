<template>

  <div id="app">
    <header id="header">
      <router-link to="/" class="logo">ABIDEMI</router-link>
      <nav>
        <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  <input type="checkbox" id="nav-check">
        <div class="nav-links" ><router-link  to="/about">About</router-link>
        <router-link  to="/port">Portfolio</router-link>
        <router-link  to="/skills">Skills</router-link>
        <router-link  to="/contact">Contact</router-link></div>
      </nav>
   </header>
   <transition name="router-anim" enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
    <router-view/>
   </transition>
  </div>
</template>

<script>
import Portfolio from "./components/Portfolio.vue";

export default {
  name: "app",
  components: {
    Portfolio
  },
  } ;
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC|Orbitron|Ubuntu');

*{
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-family: 'Ubuntu', sans-serif;
}
.nav-btn {
  display: none;
}
#nav-check {
  display: none;
}
#header{
    padding: 30px;
    background-color: #2c3e50; 
    display: grid;
    color: aliceblue;
    grid-template-columns: 150px 1fr 280px; 
}
#app{
  position: relative;
}
nav{
  grid-column: 3 / -1;
}
a{
    padding-left: 15px;
    color: aliceblue;
}
.heading{
    font-size: 2.5rem;
    font-weight: bold;
}
.form-span {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  padding-top: 35px;
  margin-bottom: 30px;
}
.main{
  background-color: #38ce59;
  height:88.4vh;
}
.logo{
  font-family: 'Bowlby One SC', cursive;
  /* font-size: 20px; */
}
.pspan{
  font-family: 'Orbitron', sans-serif;
  font-weight: bold;
}
p{
  font-size: 1.2rem;
}
@media (max-width:500px) {
  #header{
    padding: 30px;
    background-color: #2c3e50; 
    display: grid;
    color: aliceblue;
    grid-template-columns: 100px 1fr 200px; 
}
  .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding-top: 30px;
  }
 .nav-btn > label:hover {
    cursor: pointer;
  }
.nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: transparent;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 91px;
    left: 0px;
  }
  .nav-links > router-link {
    display: block;
    width: 100%;
  }
  .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  #nav-check:not(:checked) + .nav-links {
    height: 0px;
  }
  #nav-check:checked + .nav-links {
    margin-top: -3px;
    height: calc(18vh - 91px);
    overflow-y: hidden;
  }
  .port{
  background-color: #38ce59;
  height:115vh;
}
/* .skills,
.contact,
.about{
  background-color: #38ce59;
  height: 125%;
} */
p{
  font-size: 1.15rem;
}

}
</style>
