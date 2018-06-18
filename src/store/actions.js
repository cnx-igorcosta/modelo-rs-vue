import axios from 'axios'
import * as types from './mutation-types'

//const urlApi = 'http://localhost:3000'
const urlApi = 'https://google-rs-api.herokuapp.com'

export const buscarModelos = ({commit}, textoBusca) => {
    const url = `${urlApi}/searchModelos`
    const headers = { 'Access-Control-Allow-Origin': '*' }
    const data = { busca: textoBusca }
    axios.post(url, { headers, data })
        .then( response =>  response.data )
        .then( data => commit(types.BUSCAR_MODELOS, { resultados: data, textoBusca }) )
        .catch( response => console.log(response) )
}

export const detalharModelo = ({commit}, modeloRs) => {
    commit(types.DETALHAR_MODELO, modeloRs)
}

export const editarModelo = ({commit}) => {
    commit(types.EDITAR_MODELO)
}

export const salvarModelo = ({commit}, modeloRs) => {
    const url = `${urlApi}/modeloRs/`
    const headers = { 'Content-Type':'application/json' }
    const data = modeloRs
    axios.post(url, { headers, data })
        .then( response =>  {
            if(response.data.erro) { Promise.reject(response) }
            else{ return response.data.modeloRs }
        })
        .then( modeloRS => commit(types.SALVAR_MODELO, modeloRs) )
        .catch( response => console.log(response) )

}

export const atualizarModelo = ({commit}, modeloRs) => {
    const url = `${urlApi}/modeloRs/${modeloRs._id}`
    const headers = { 'Content-Type':'application/json' }
    const data = modeloRs
    axios.put(url, { headers, data })
        .then( response =>  {
            if(response.data.erro) { Promise.reject(response) }
            else{ return response.data.modeloRs }
        })
        .then( modeloRS => commit(types.ATUALIZAR_MODELO, modeloRS) )
        .catch( response => console.log(response) )
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
