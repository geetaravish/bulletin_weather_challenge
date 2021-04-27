<template>
  <div class="check-weather" >
      <div class="check-weather-text">Weather in your city (Enter Zipcode)</div>
      <div class="check-weather-input">
       <input type="text" v-model="zipCode" id="zipCode" @blur="validiteZipCode()" @keyup.enter="validiteZipCode()" placeholder="Enter Zipcode" />
        <button id="checkWeather" type="submit" class="btn-search" @click="validiteZipCode()">Check Weather</button>
    </div>
    <div class="error-message">
        <span v-show="zipCodeError">{{errorMessage}}</span>
    </div>
  </div>
  
</template>

<script>


export default {
  name: "checkWheather",
  data() {
    return {
      zipCode: "",
      zipCodeError: false,
      errorMessage: "Please enter Valid Zip Code",
    };
  },
  created() {
  },
  methods: {
    isValidUSZip(Zip) {
      return /^\d{5}(-\d{4})?$/.test(Zip);
    },
    validiteZipCode() {
      if (this.isValidUSZip(this.zipCode)) {
          this.zipCodeError = false;
          this.$store.commit("wheatherState/SET_ZIPCODE", this.zipCode);
          this.$store.dispatch("wheatherState/getWeatherData");
      } else {
          this.zipCodeError = true
      }
    },
  }
 
};
</script>
<style>
.check-weather {
  width: 100%;
  padding: 50px;
  background-color: #f2f2f2;
  
  margin-top: 50px;
  background-image: radial-gradient(#f2f2f2,#f2f2f2);
} 
.check-weather-text{
  width: 50%;
  height: 50%;
}
.input {
  padding: 10px;
  width: 50px;
  border: 1px solid #ececed;
  border-radius: 4pt;
  padding: 4pt 8pt;
  color: #48484a;
  font-family: Space Grotesk,Arial,sans-serif;
  font-size: 14px;
  appearance: none;
  border: none;
  width: 100%;
  border-radius: 4pt 0 0 4pt;
  height: 24pt;
}
.error-message {
    width: 300px;
    height: 60px;
    display: inline;
    letter-spacing: normal;
    text-align: left;
    color: #990611;;
}
.btn-search {
  background-color: #48484a;
  border-color: #48484a;
  color: #f2f2f2;
}
</style>