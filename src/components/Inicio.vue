<template>
    <div>
        <Nav></Nav>
        <br>
        <br>
        <h1>hello soy el inicio {{nombre}}</h1>
        <p v-if="userLogged">User loggued: {{ userLogged}}</p>
    </div>
</template>

<script>
import auth from "@/logic/auth";
import Nav from "@/components/Nav";
import {mapState} from 'vuex'
    export default {
       components:{
           Nav
       },

        
        computed: mapState({
            nombre: function (state){
                return state.nombre
            },
            userLogged() {
                return auth.getUserLogged();
                }
        }),
    }
</script>


<style scoped>
</style>