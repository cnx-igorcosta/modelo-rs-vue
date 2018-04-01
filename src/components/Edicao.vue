<template>
    <div id="main" v-if="$store.state.edicao">
        <section id="intro" class="main">
            <div class="spotlight">
                <div class="content">
                    <header class="major" id="titulo-edicao">
                        <h2 v-if="modeloRs._id">Edição de Modelo de RS</h2>
                        <h2 v-else>Novo de Modelo de RS</h2>
                    </header>
                    <form>
                    <div class="row uniform">
                        <div class="12u 12u$(xsmall)" v-show="$store.state.mensagem.length">
                            {{$store.state.mensagem}}
                        </div>
                        <div class="4u 12u$(xsmall)">
                            <label>Número</label>
                            <input 
                                type="text" 
                                v-model="modeloRs.numero"/>
                        </div>
                        <div class="8u 12u$(xsmall)">
                            <label>Descrição</label>
                            <input 
                                type="text" 
                                v-model="modeloRs.descricao"/>
                        </div>
                        <div class="12u$ 12u$(xsmall)">
                            <label>Grupo Designado</label>
                            <input 
                                type="text" 
                                v-model="modeloRs.grupo" />
                        </div>
                        <div class="12u 12u$(small)">
                            <label>Ambiente</label>
                        </div>
                        <div class="4u 12u$(small)">
                            <input 
                                type="radio" 
                                name="ambiente"
                                value="dsv"
                                v-model="modeloRs.ambiente" />
                            <label for="demo-priority-normal">Desenvolvimento</label>
                        </div>
                        <div class="4u 12u$(small)">
                            <input 
                                type="radio" 
                                name="ambiente"
                                value="hml"
                                v-model="modeloRs.ambiente">
                            <label for="demo-priority-normal">Homologação</label>
                        </div>
                        <div class="4u$ 12u$(small)">
                             <input 
                                type="radio" 
                                name="ambiente"
                                value="prd"
                                v-model="modeloRs.ambiente" />
                            <label for="demo-priority-normal">Produção</label>
                        </div>
                        <div class="6u 12u$(small)">
                            <input 
                                type="checkbox" 
                                name="de-acordo"
                                v-model="modeloRs.deAcordo" />
                            <label for="demo-copy">Anexar De Acordo</label>
                        </div>
                        <div class="12u$">
                            <label>Observações</label>
                            <textarea 
                                rows="6"
                                v-model="modeloRs.observacao"></textarea>
                        </div>
                        <div class="12u$">
                            <ul class="actions">
                                <li><a href="#titulo-edicao" class="button special" @click="salvar">Salvar</a></li>
                                <li><a href="#principal" class="button" @click="buscarModelos($store.state.textoBusca)">Voltar</a></li>
                            </ul>
                        </div> 
                    </div>
                </form>
            </div>
        </div>
    </section>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    import { mapGetters } from 'vuex'

    export default {
        props: ['busca'],
        data() {
            return {
                modeloRs: {}
            }
        },
        methods: {
            ...mapActions([
                'limparModelo',
                'salvarModelo',
                'atualizarModelo',
                'buscarModelos'
            ]),
            ...mapGetters([
                'getModeloRs'
            ]),
            salvar() {
                if(this.modeloRs._id) {
                    this.atualizarModelo(this.modeloRs)
                } else {
                    this.salvarModelo(this.modeloRs)
                }
            }
        },
        computed: {
            setModeloRs() {
                this.modeloRs = { ...this.getModeloRs() }
            }    
        },
        watch: {
            setModeloRs() {}
        }
        
    }
</script>
