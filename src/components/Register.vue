<template class="todo bg-dark">
    <div class="todo bg-dark">
        <Nav />

        <body @mousemove="changeImage" class="bg-dark">
            
       
    <div class="login">
        <img :src="src" id="monster" alt="">
        <form class="formulario" @submit.prevent="register">
             <label>Nombre : </label>
            <input type="text" id="input-name" @keyup="read" @focus="parar" @blur="seguir" placeholder="Tu Nombre" autocomplete="off">
            <label>Usuario :</label>
            <input type="text" v-model="email" id="input-usuario" @keyup="read" @focus="parar" @blur="seguir" placeholder="seba.developer@gmail.com" autocomplete="off">
            <label>Contraseña :</label>
            <input type="password" @focus="pass" @blur="nopas" id="input-clave" placeholder="*******">
             <label>Repetir Contraseña :</label>
            <input type="password"  v-model="password" @focus="pass" @blur="nopas" id="input-clavedos" placeholder="*******">
            <button type="submit">Login</button>
        </form>
    </div>
     </body>
    </div>
</template>

<script>
import Nav from "@/components/Nav";
import auth from "@/logic/auth";
    export default {
        name: 'Register',
        components:{
            Nav
        },
        methods: {

           async register() {
               try {
                    await auth.register(this.email, this.password);
                     window.location.replace('./'); 
                    //  this.$router.push("/")
               } catch (error) {
                   console.log(error)
               }
           
           
  },
           
          changeImage(m){
              
          
            const anchoMitad = window.innerWidth / 2;
            const altoMitad = window.innerHeight / 2;
            //   console.log('cambiando' + m)
               if (this.seguirPunteroMouse) {
        if (m.clientX < anchoMitad && m.clientY < altoMitad) {
            this.src = require('@/assets/img/idle/2.png')
        } else if (m.clientX < anchoMitad && m.clientY > altoMitad) {
            this.src = require('@/assets/img/idle/3.png')
        } else if (m.clientX > anchoMitad && m.clientY < altoMitad) {
            this.src = require('@/assets/img/idle/5.png')
        } else {
            this.src = require('@/assets/img/idle/4.png')
        }
    }
          },
          read(){
              const inputUsuario = document.getElementById('input-usuario');
                 let usuario = inputUsuario.value.length;
                if(usuario >= 0 && usuario<=5){
                    this.src = require('@/assets/img/read/1.png')
                }else if(usuario >= 6 && usuario<=14){
                    this.src = require('@/assets/img/read/2.png')
                }else if(usuario >= 15 && usuario<=20){
                    this.src = require('@/assets/img/read/3.png')
                }else{
                    this.src = require('@/assets/img/read/4.png')
                }
          },
          pass(){
               this.seguirPunteroMouse = false;
                let cont = 1;
            const cubrirOjo = setInterval(() => {
                this.src = require(`@/assets/img/cover/${cont}.png`)
                if(cont < 8){
                    cont++;
                }else{
                    clearInterval(cubrirOjo);
                }
            }, 60);
          },
          nopas(){
  this.seguirPunteroMouse = true;
               let cont = 7;
    const descubrirOjo = setInterval(() => {
        this.src = require(`@/assets/img/cover/${cont}.png`)
        if(cont > 1){
            cont--;
        }else{
            clearInterval(descubrirOjo);
        }
    }, 60);
          },
          parar(){
              this.seguirPunteroMouse = false;
          },
           seguir(){
              this.seguirPunteroMouse = true;
          }
        },
        data() {
            return {
                src: require('@/assets/img/idle/1.png'),
                seguirPunteroMouse: true,
                email: "",
                password: "",
                error:false
            }
        },created() {
        },
        mounted() {
      
       
        },
    }
   
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Bowlby One SC', cursive;
    
}
.todo{
     background-color: #000;
}
body{
    height: 100vh;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login{
    height: 550px;
    position: absolute;
    left: 40%;
}
.formulario{
    width: 400px;
    position: absolute;
    background-color: #fff;
    border: 5px solid #8f4790;
    border-radius: 10px;
    padding: 30px 60px;
    top: 290px;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
}
.formulario input,label,button{
    display: block;
    width: 100%;
    margin: 5px 0;
}
.formulario input{
    height: 40px;
    border: 2px solid #8f4790;
    border-radius: 10px;
    padding: 0 8px;
}
.formulario button{
    margin-top: 20px;
    cursor: pointer;
    border: none;
    height: 40px;
    background-color: #824283;
    box-shadow: 1px 1px 2px #000;
    color: #fff;
}
.formulario button:hover{
    background-color: #8f4790;
}
</style>