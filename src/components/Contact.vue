<template>
    <div class="contact main">
                <div class="box">
        <h2>GET IN TOUCH</h2>
        <form name="contact" data-netlify="true">
            <div class="inputBox">
                <input type="text" name="name" required value="">
                <label for="">Name</label>
            </div>
            <div class="inputBox">
                    <input type="email" name="email" required value="">
                    <label for="">Email</label>
                </div>
                <div class="inputBox">
                    <input type="text" name="message" required value="">
                    <label for="">Message</label>
                    </div>
                <button type="submit">SEND</button>
        </form>
    </div>  
                
            </div>
</template>

<style scoped>
button {
  background-color: #38ce59;
  padding: 8px;
  border: none;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 40px -10px #000;
  cursor: pointer;
}

.box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.box {
  position: absolute;
  top: 30vw;
  left: 50vw;
  transform: translate(-50%, -50%);
  width: 35vw;
  padding: 20px;
  background: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.box .inputBox {
  position: relative;
}

.box .inputBox input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid;
  outline: none;
  background: transparent;
}

.box .inputBox label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.box .inputBox input:focus ~ label,
.box .inputBox input:valid ~ label {
  top: -18px;
  left: 0;
  color: #38ce59;
  font-size: 12px;
}

.box input[type="submit"] {
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  background: #38ce59;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

textarea {
  outline: none;
  border-radius: 5px;
}

@media (max-width: 1020px) {
  .box {
    position: absolute;
    top: 70vw;
    left: 50vw;
    transform: translate(-50%, -50%);
    width: 60vw;
    padding: 20px;
    background: rgba(0, 0, 0, 0.8);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }
  input,
  button,
  textarea {
    width: 50vw;
  }
}

@media (max-width: 500px) {
  .box {
    position: absolute;
    top: 80vw;
    left: 50vw;
    transform: translate(-50%, -50%);
    width: 60vw;
    padding: 20px;
    background: rgba(0, 0, 0, 0.8);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }
  input,
  button,
  textarea {
    width: 47vw;
  }
}
</style>
