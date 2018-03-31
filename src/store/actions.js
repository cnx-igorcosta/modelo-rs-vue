import axios from 'axios'
import * as types from './mutation-types'

export const buscarModelos = ({commit},textoBusca) => {
    //axios.post('http://localhost:3000/searchModelos',{ 
    axios.post('https://google-rs-api/searchModelos',{     
        headers: { 'crossDomain': true },
        data: {busca: textoBusca}
    })
        .then( response =>  response.data )
        .then( data => commit(types.BUSCAR_MODELOS, data))
        .catch( response => console.log(response))
    //commit(types.BUSCAR_MODELOS, getMockModelos())
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

function getMockModelos() {
  return [
    {_id:1, descricao: 'Criação de usuários na ferramenta BSRA', numero: 4651979, grupo: 'BRADESCO SEGUROS - ARQUITETURA FERRAMENTAS - BSRA', ambiente: 'dsv', deAcordo: false, obs: 'Necessário o prévio cadastramento da aplicação no BSRA'},
    {_id:2, descricao: 'Validação do BSRA da aplicação', numero: 4652693},
    {_id:3, descricao: 'Inclusão de aplicação na plataforma IC', numero: 4667410},
    {_id:4, descricao: 'Criação de Context Root da aplicação', numero: 4677590},
    {_id:5, descricao: 'Grant em tabelas criadas', numero: 4698389},
    {_id:5, descricao: 'Disponibilização de deploy automático no IC', numero: 4699295},
    {_id:6, descricao: 'Criação de links na intranet', numero: 4705810},
    {_id:6, descricao: 'Habilitar log de produção no IC', numero: 4590765},
  ]
}
