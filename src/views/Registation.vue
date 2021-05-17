<template>
  <div>
      <h1>Registation</h1>
      <form @submit.prevent="Registation">
        <input type="email" placeholder="Inter Email" v-model="email">
        <input type="password" placeholder="Enter Password" v-model="password">
        <input type="submit" value="Registation">
        <p>Have a Account <router-link to="/login">Login Here</router-link></p>
      </form>
  </div>
</template>

<script>
import firebase from 'firebase';
import {ref} from 'vue';
export default {

  setup(){
    const email = ref("");
    const password = ref("");

    const Registation = () =>{
      firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then(user=>{
            alert(user);
          })
          .catch(err=>alert(err.message))
    }

    return{
      Registation,
      email,
      password
    }
  }

}
</script>

<style>

</style>