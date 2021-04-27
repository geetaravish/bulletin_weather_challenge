<template>
  <div class="introContainer" >
      <checkWheather/>
      <fiveDaysWeather/>
  </div>
</template>

<script>

import checkWheather from './checkWheather.vue'
import fiveDaysWeather from './fiveDaysWeather.vue'
import { mapState } from 'vuex';


export default {
  name: "wheather",
  components: {
    "checkWheather": checkWheather,
    "fiveDaysWeather": fiveDaysWeather,
  },
  computed: {
      ...mapState("wheatherState", ["wheatherData"]),
      checkWheatherOnCallData() {
        if(this.wheatherOnCallData) {
            return true;
        }
        return false;
      }
  }
};
</script>
<style  >
.content-details-wrapper {
  margin: 15px;
}

</style>