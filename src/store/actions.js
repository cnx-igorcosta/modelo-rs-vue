import axios from 'axios'
import * as types from './mutation-types'

export const buscarModelos = ({commit}) => {
    // axios.get('')
    // .then( response => response.resultados)
    // .then( resultados => commit(types.BUSCAR_MODELOS, resultados))
    // .catch( response => console.log(response))
    commit(types.BUSCAR_MODELOS, [{_id:1, descricao: 'Criação de context-root', numero: 353275}])
}

export const detalharModelo = ({commit}, modeloRs) => {
    commit(types.DETALHAR_MODELO, modeloRs)
}

export const editarModelo = ({commit}) => {
    commit(types.EDITAR_MODELO)
}

export const salvarModelo = ({commit}, modeloRs) => {
    commit(types.SALVAR_MODELO, modeloRs)
}

export const excluirModelo = ({commit}, idModelo) => {
    commit(types.EXCLUIR_MODELO, idModelo)
}

export const limparModelo = ({commit}) => {
    commit(types.LIMPAR_MODELO)
}

export const novoModelo = ({commit}) => {
    commit(types.NOVO_MODELO)
}