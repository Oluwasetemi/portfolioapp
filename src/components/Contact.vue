<template>
    <div class="contact main">
                    <h1 class="form-span">Get In Touch</h1>
                <form class="contact-form">
                    <div class="label">
                        <label for="">Name</label>
                    </div>
                    <input type="text" placeholder="Full Name">
                    <div class="label">
                        <label for="">Phone</label>
                    </div>
                    <input type="tel" pattern="[0-9]{10}" placeholder="Phone No.">
                    <div class="label">
                        <label for="">Email Address</label>
                        </div>
                        <input type="email" placeholder="Enter Your Email">
                    
                    <div class="label">		          
		        
		      	<textarea cols="46" rows="5" placeholder="Message"  required></textarea> 
			</div>
                    <button type="submit">SEND</button>
                </form>  
                <div class="foot">Copyright &copy; Abidemi 2018</div> 
            </div>
</template>

<style scoped>
button {
  background-color: #38ce59;
  padding: 8px;
  border-radius: 5px;
  box-shadow: 0 0 40px -10px #000;
  cursor: pointer;
}
h3{
    text-align: center;
}
.foot{
    margin-top: 60px;
    text-align: center;
}
input,
button,
textarea {
  outline: none;
  border-radius: 5px;
}
.contact-form {
  margin: 0 auto;
  margin-top: 10px;
  width: 35vw;
  display: grid;
  justify-content: center;
  color: black;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 40px -10px #000;
  padding: 20px;
}
.label {
  margin-top: 20px;
  margin-bottom: 5px;
}
@media (max-width: 500px) {
    .contact-form {
    width: 60vw;
    margin: 0 auto;
    margin-top: 5px;
    display: grid;
    justify-content: center;
    color: black;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 40px -10px #000;
    padding: 20px;
  }
  input,
  button,
  textarea {
  width: 50vw;
}
.foot{
    margin-top: 20px;
    text-align: center;
}
}

@media (min-width: 500px) and (max-width: 1020px) {
  .contact-form {
    width: 60vw;
    margin: 0 auto;
    margin-top: 5px;
    display: grid;
    justify-content: center;
    color: black;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 40px -10px #000;
    padding: 20px;
  }
  input,
  button,
  textarea {
  width: 50vw;
}
.foot{
    margin-top: 35px;
    text-align: center;
}
.main{
    height: 170vh;
    background-color: #38ce59;
}
}
</style>


