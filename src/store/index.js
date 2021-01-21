import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import {state,getters,mutations} from './mutations.js';

import {actions} from './actions';

// import menu from './modules/menu'


export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules:{
    }
})
