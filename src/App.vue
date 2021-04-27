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
}
</script>

<style>
</style>
