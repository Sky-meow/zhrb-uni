<template>
  <div id="app">
			<router-view/>
  </div>
</template>

<script>
import index from './components/index'

 export default {
     mounted() {
         this.$router.push('/index');
     }
 }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
