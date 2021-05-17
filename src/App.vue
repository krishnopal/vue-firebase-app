<template>
  <router-view/>
</template>

<script>
import {onBeforeMount} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import firebase from 'firebase'

export default{
  setup() {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(()=>{
      firebase.auth().onAuthStateChanged((user)=>{
        if (!user) {
          router.replace('/login');
        } else if(route.path=="/login" || route.path=="/registation") {
          router.replace('/');
        }
      });
    });

  },
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 40px 20px 20px 20px;
}
body{
  background: #2c3e50;
  color: white;
}

a{
  color: inherit;
}
</style>
