<template>
    <div class="">
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="/">MonsterPage</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="/">Home</a></li>
      <li><a href="blog">Nosotros</a></li>
       <li><a href="in">Soy </a></li>
      <!-- <li><a href="#">Acerca De</a></li> -->
    </ul>
   
    <div v-if="userLogged">

    
    <ul class="nav navbar-nav navbar-right" >
    <li><a href="/register" @click="UserDel"><span class="glyphicon glyphicon-user"></span> {{userLogged}}</a></li>
    </ul>
    </div>
    <div v-else>
    <ul class="nav navbar-nav navbar-right" >
      <li><a href="/register"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="/log"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
    </div>
  </div>
</nav>

    </div>
</template>

<script>
import auth from "@/logic/auth";
    export default {
            name: 'Nav',
            computed: {
                userLogged() {
                return auth.getUserLogged();
                },
                 
            },
            methods: {
                 UserDel() {
                return auth.deleteUserLogged();
                 }
            },
    }
</script>

<style scoped>
nav{
    height: 75px;
    margin-bottom: -40px;
    margin-top:-20px;
}
</style>