import Vue from "vue";
import Vuex from "vuex";
import wheatherState from "../state/wheatherState";


Vue.use(Vuex)

const store = {
    modules: {
        wheatherState: wheatherState,
    }, 
}

export default new Vuex.Store(store)
