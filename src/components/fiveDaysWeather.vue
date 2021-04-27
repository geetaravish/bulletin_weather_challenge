<template>
  <div class="five-days-forecast" v-show="fiveDaysList">
      <div><currentWeather/></div>
      <h2 class="title-forecast">5-day forecast</h2>
      <ul class="days-forecast">
          <li :key="idx" v-for="(items, idx) in fiveDaysList">
             <weather-icon :idx="idx" :description="items.weather[0].description"></weather-icon>
              <div>{{ items.main.temp_max}}/{{ items.main.temp_min}} °C</div>
              <div><b>Feels like:</b> {{ items.main.feels_like}} °C</div>
              <div><b>Humidity:</b> {{ items.main.humidity}}</div>
              <div><b>Visibility:</b> {{ items.visibility}}</div>
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
.title-forecast{
  left: 0;
  padding-left: 20px;
  background-color: #f2f2f2;
    color: #000000b3;

}
div {
      color: #000000b3;
      line-height: 20px;

}
</style>