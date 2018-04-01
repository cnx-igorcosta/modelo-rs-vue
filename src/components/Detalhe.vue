<template>
    <div id="main" v-show="$store.state.modeloRs._id && !$store.state.edicao">
        <section id="intro" class="main">
            <div class="spotlight">
                <div class="content">
                    <header class="major">
                        <h2>Detalhes da RS {{$store.state.modeloRs.numero}}</h2>
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
                                :value="$store.state.modeloRs.numero" 
                                :disabled="true" />
                        </div>
                        <div class="8u 12u$(xsmall)">
                            <label>Descrição</label>
                            <input 
                                type="text" 
                                :value="$store.state.modeloRs.descricao" 
                                :disabled="true" />
                        </div>
                        <div class="12u$ 12u$(xsmall)">
                            <label>Grupo Designado</label>
                            <input 
                                type="text" 
                                :value="$store.state.modeloRs.grupo"  
                                :disabled="true"/>
                        </div>
                        <div class="12u 12u$(small)">
                            <label>Ambiente</label>
                        </div>
                        <div class="4u 12u$(small)">
                            <input 
                                type="radio" 
                                name="ambiente"
                                value="dsv"
                                :checked="$store.state.modeloRs.ambiente === 'dsv'"
                                :disabled="true">
                            <label for="demo-priority-normal">Desenvolvimento</label>
                        </div>
                        <div class="4u 12u$(small)">
                            <input 
                                type="radio" 
                                name="ambiente"
                                value="hml"
                                :checked="$store.state.modeloRs.ambiente === 'hml'"
                                :disabled="true">
                            <label for="demo-priority-normal">Homologação</label>
                        </div>
                        <div class="4u$ 12u$(small)">
                             <input 
                                type="radio" 
                                name="ambiente"
                                value="prd"
                                :checked="$store.state.modeloRs.ambiente === 'prd'"
                                :disabled="true">
                            <label for="demo-priority-normal">Produção</label>
                        </div>
                        <div class="6u 12u$(small)">
                            <input 
                                type="checkbox" 
                                name="de-acordo"
                                :checked="$store.state.modeloRs.deAcordo"
                                :disabled="true">
                            <label for="demo-copy">Anexar De Acordo</label>
                        </div>
                        <div class="12u$">
                            <label>Observações</label>
                            <textarea 
                                rows="6"
                                :value="$store.state.modeloRs.observacao"
                                :disabled="true"></textarea>
                        </div>
                        <div class="12u$">
                            <ul class="actions">
                                <li><input type="button" value="Editar" @click="editarModelo"/></li>
                                <!-- <li><input type="button" value="Excluir" @click="excluirModelo($store.state.modeloRs._id)"/></li> -->
                                <li><a href="#principal" class="button special" @click="limparModelo">Voltar</a></li>
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

    export default {
        methods: {
            ...mapActions([
                'limparModelo',
                'editarModelo',
                'excluirModelo',
                ]),
            salvarModelo() {

            }
        }
    }
</script>
