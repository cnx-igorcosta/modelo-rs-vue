<template>
    <div id="main" v-if="$store.state.edicao">
        <section id="intro" class="main">
            <div class="spotlight">
                <div class="content">
                    <header class="major" id="titulo-edicao">
                        <h2 v-if="modeloRs._id">Edição de Modelo de {{modeloRs.tipo}}</h2>
                        <h2 v-else>Novo de Modelo de {{modeloRs.tipo}}</h2>
                    </header>
                    <form>
                    <div class="row uniform">
                        <div class="12u 12u$(xsmall)" v-show="$store.state.mensagem.length">
                            {{$store.state.mensagem}}
                        </div>
                        <div class="12u 12u$(small)" v-if="!modeloRs._id">
                            <label>Tipo</label>
                        </div>
                        <div class="6u 12u$(small)" v-if="!modeloRs._id">
                            <input 
                                type="radio" 
                                name="tipo"
                                id="rs"
                                value="RS"
                                v-model="modeloRs.tipo" />
                            <label for="rs">RS</label>
                        </div>
                        <div class="6u 12u$(small)" v-if="!modeloRs._id">
                            <input 
                                type="radio" 
                                name="tipo"
                                id="tarefa"
                                value="Tarefa"
                                v-model="modeloRs.tipo" />
                            <label for="tarefa">Tarefa</label>
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
                        <div class="4u 12u$(xsmall)" v-if="isTarefa()">
                            <label>Número da RDM</label>
                            <input 
                                type="text" 
                                v-model="modeloRs.numeroRdm"/>
                        </div>
                        <div class="12u 12u$(small)">
                            <label>Ambiente</label>
                        </div>
                        <div class="4u 12u$(small)" v-if="!isTarefa()">
                            <input 
                                type="radio" 
                                name="ambiente"
                                id="dsv"
                                value="dsv"
                                v-model="modeloRs.ambiente" />
                            <label for="dsv">Desenvolvimento</label>
                        </div>
                        <div class="4u 12u$(small)">
                            <input 
                                type="radio" 
                                name="ambiente"
                                id="hml"
                                value="hml"
                                v-model="modeloRs.ambiente" />
                            <label for="hml">Homologação</label>
                        </div>
                        <div class="4u$ 12u$(small)">
                             <input 
                                type="radio" 
                                name="ambiente"
                                id="prd"
                                value="prd"
                                v-model="modeloRs.ambiente" />
                            <label for="prd">Produção</label>
                        </div>
                        <div class="6u 12u$(small)" v-if="!isTarefa()">
                            <input 
                                type="checkbox" 
                                name="de-acordo"
                                id="de-acordo"
                                v-model="modeloRs.deAcordo" />
                            <label for="de-acordo">Precisa anexar De Acordo?</label>
                        </div>
                        <div class="6u 12u$(small)" v-if="isTarefa()">
                            <input 
                                type="checkbox"
                                name="precisa-rs" 
                                id="precisa-rs"
                                v-model="modeloRs.precisaRs" />
                            <label for="precisa-rs">Precisa criar RS para execução da tarefa?</label>
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
                                <li><a href="#principal" class="button" @click="voltar">Voltar</a></li>
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
                modeloRs: {},
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
            isTarefa() {
                return this.modeloRs.tipo === 'Tarefa'
            },
            validar() {
                return ( this.modeloRs.numero && this.modeloRs.descricao)
            },
            salvar() {
                if(this.validar()) {
                    if(this.modeloRs._id) {
                        this.atualizarModelo(this.modeloRs)
                    } else {
                        this.salvarModelo(this.modeloRs)
                    }
                }
            },
            voltar() {
                if(this.$store.state.textoBusca) {
                    this.buscarModelos(this.$store.state.textoBusca)
                } else {
                    this.limparModelo()
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
