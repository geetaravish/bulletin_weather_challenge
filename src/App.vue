<template>
  <div id="app" class="app" >
    <siteHeaderComp></siteHeaderComp>
    <WheatherComp/>
    <FooterComp/> 
  </div>
</template>

<script>
import siteHeader from "./components/siteHeader"
import Footer from "./components/footer"
import Wheather from './components/wheather'

export default {
  name: 'App',
  components: {
    siteHeaderComp: siteHeader,
    WheatherComp: Wheather,
    FooterComp: Footer,
  },
  data() {
    return {
    };
  },
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  margin-top: 20px;
} */

</style>
