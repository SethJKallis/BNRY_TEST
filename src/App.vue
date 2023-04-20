<template>
  <NavComp/>
  <router-view/>
</template>


<script>
import NavComp from '@/components/NavComp.vue'
export default{
components: {
  NavComp
}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 4em;
}

nav {
  padding: 30px;
  position: fixed;
  top: 0;
  width: 100%;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
