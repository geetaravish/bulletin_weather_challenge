import Vue from "vue";
import Vuex from "vuex";
import wheatherState from "../state/wheatherState";
// import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

const store = {
    modules: {
        wheatherState: wheatherState,
    }, 
    // plugins: [createPersistedState()],
}

export default new Vuex.Store(store)
