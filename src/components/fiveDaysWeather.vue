<template>
  <div class="five-days-forecast" v-show="fiveDaysList">
      <div><currentWeather/></div>
      <h2 class="forecast-title">5-day forecast</h2>
      <ul class="days-forecast">
          <li :key="idx" v-for="(items, idx) in fiveDaysList">
            <div><span class="forecast-title">Day {{idx+1}}</span></div>
             <div><span class="forecast-title"><weather-icon :idx="idx" :description="items.weather[0].description"></weather-icon></span></div>
              <div><span class="forecast-title">Temp:</span><span class="forecast-data">{{ items.main.temp_max}} / {{ items.main.temp_min}} °C</span></div>
              <div><span class="forecast-title">Feels like:</span> <span class="forecast-data">{{ items.main.feels_like}} °C</span></div>
              <div><span class="forecast-title">Humidity:</span><span class="forecast-data"> {{ items.main.humidity}}</span></div>
              <div><span class="forecast-title">Visibility:</span><span class="forecast-data"> {{ items.visibility}}</span></div>
              <div><span class="forecast-title">Precipitation:</span> <span class="forecast-data">{{ items.pop}}</span></div>
          </li>
        </ul> 
  </div>
</template>
<script>
import { mapState } from 'vuex';
import weatherIcon from './weatherIcon.vue'
import currentWeather from './currentWeather.vue'

export default {
  name: "fiveDaysWeather",
  components: {
    "weatherIcon": weatherIcon,
    "currentWeather": currentWeather,
  },
  computed: {
      ...mapState("wheatherState", ["wheatherData"]),
      fiveDaysList() {
        if(this.wheatherData && this.wheatherData.list) {
            return this.wheatherData.list;
        }
        return "";
      },
  }
};
</script>
<style>
.five-days-forecast {
  right: 0;
  padding: 20px;
  background-color: #f2f2f2;
  color: #000000b3;
}
.days-forecast {
  display: flex;
  flex-flow: row;
  color: #000000b3;
}
li{
  list-style: none;
  width: 100%;
  color: #000000b3;
}
.forecast-title{
  left: 0;
  padding-left: 20px;
  background-color: #f2f2f2;
  color: #000000b3;
  font-size: 15px;
}
div {
  color: #000000b3;
  line-height: 20px;
}
.forecast-data{
  font-size: 12px;
}
</style>