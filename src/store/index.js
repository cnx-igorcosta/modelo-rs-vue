import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutation'
import * as actions from './actions'
import { getters } from './getters'

Vue.use(Vuex)

const state = {
    resultados: [],
    modeloRs: {},
    edicao: false,
    mensagem: '',
    textoBusca: ''
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})