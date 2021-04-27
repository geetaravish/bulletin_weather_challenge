import axios from 'axios';

export default {
    state: {
      wheatherData: [],
      endpoint: "",
      apiKey: "",
      count: 5,
      zipCode: "",
      dayNightIconList: [
        {
          "description": "clear sky",
          "icon": "http://openweathermap.org/img/wn/01d@2x.png",
        },
        {
          "description": "few clouds",
          "icon": "http://openweathermap.org/img/wn/02d@2x.png",
        },
        {
          "description": "scattered clouds",
          "icon": "http://openweathermap.org/img/wn/03n@2x.png",
        },
        {
          "description": "broken clouds",
          "icon": "http://openweathermap.org/img/wn/04n@2x.png",
        },
        {
          "description": "rain",
          "icon": "http://openweathermap.org/img/wn/09n@2x.png",
        },
        {
          "description": "thunderstorm",
          "icon": "http://openweathermap.org/img/wn/11n@2x.png",
        },
        {
          "description": "snow",
          "icon": "http://openweathermap.org/img/wn/13n@2x.png",
        },
        {
          "description": "mist",
          "icon": "http://openweathermap.org/img/wn/50n@2x.png",
        }
      
      ]
    },
    mutations: {
      GET_WEATHERS_DATA(state, wheatherData) {
          state.wheatherData = wheatherData
      },
      SET_ZIPCODE(state, zip) {
        state.zipCode = zip
      },
    },
    actions: {
        async getWeatherData({ commit, state }) {
          let endpoint ="https://api.openweathermap.org/data/2.5/forecast?"
          let apiKey = "fa56bfa56d667c9243a012b42283ad11";
          let url = endpoint+"zip="+state.zipCode+"&appid="+apiKey+"&cnt="+state.count;
          return axios.get(url)
              .then(response => { 
                  if(response.status == 200){
                    commit("GET_WEATHERS_DATA", response.data);
                  }            
          })
        }
    },
    getters: {
    },
    namespaced: true,
};