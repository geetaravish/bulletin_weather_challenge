<template>
  <div class="current-weather" v-if="currentCity" >
    <h1>{{currentCity}}</h1>
  </div>  
</template>

<script>

import { mapState } from 'vuex';
export default {
  name: "currentWeather",
  computed: {
      ...mapState("wheatherState", ["wheatherData"]),
      currentCity() {
        let city = ""
        if(this.wheatherData && this.wheatherData.city) {
           city = `${this.wheatherData.city.name}, ${this.wheatherData.city.country}`
        }
        return city;
      }
  },
};
</script>
<style  >
.current-weather {
  left: 0;
  padding-left: 20px;
  background-color: #f2f2f2;
} 
</style>