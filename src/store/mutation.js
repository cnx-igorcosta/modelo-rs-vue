import * as types from './mutation-types'

function limpar(state) {
    state.modeloRs = {}
    state.resultados = []
    state.mensagem = ''
    state.edicao = false
}

export const mutations = {
    [types.BUSCAR_MODELOS] (state, {resultados, textoBusca}) {
        limpar(state)
        state.textoBusca = textoBusca
        if(resultados.length) {
            state.resultados.push(...resultados)
        } else {
            state.mensagem = 'Não foram encontrados resultados para sua busca'
        }
    },
    
    [types.DETALHAR_MODELO] (state, modeloRs) {
        state.mensagem = ''
        state.modeloRs = modeloRs
    },

    [types.EDITAR_MODELO] (state) {
        state.mensagem = ''
        state.edicao = true;
    },

    [types.SALVAR_MODELO] (state, modeloRs) {
        state.modeloRs = modeloRs
        state.mensagem = `RS número ${modeloRs.numero} salva com sucesso!`
    },

    [types.ATUALIZAR_MODELO] (state, modeloRS) {
        state.modeloRs = modeloRS
        state.mensagem = `RS número ${state.modeloRs.numero} atualizada com sucesso!`
    },

    [types.EXCLUIR_MODELO] (state, idModelo) {
        limpar(state)
        state.mensagem = 'excluído com sucesso!'
    },

    [types.LIMPAR_MODELO] (state) {
        state.edicao = false;
        state.modeloRs = {}
        state.mensagem = ''
    },

    [types.NOVO_MODELO] (state) {
        limpar(state)
        state.edicao = true;
    }
}