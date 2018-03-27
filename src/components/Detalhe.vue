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
                                :disabled="!$store.state.edicao" />
                        </div>
                        <div class="8u 12u$(xsmall)">
                            <label>Descrição</label>
                            <input 
                                type="text" 
                                :value="$store.state.modeloRs.descricao" 
                                :disabled="!$store.state.edicao" />
                        </div>
                        <!-- <div class="6u$ 12u$(xsmall)">
                            <input type="email" name="demo-email" id="demo-email" value="" placeholder="Email" />
                        </div>
                        <div class="12u$">
                            <div class="select-wrapper">
                                <select name="demo-category" id="demo-category">
                                    <option value="">- Category -</option>
                                    <option value="1">Manufacturing</option>
                                    <option value="1">Shipping</option>
                                    <option value="1">Administration</option>
                                    <option value="1">Human Resources</option>
                                </select>
                            </div>
                        </div>
                        <div class="4u 12u$(small)">
                            <input type="radio" id="demo-priority-low" name="demo-priority" checked>
                            <label for="demo-priority-low">Low</label>
                        </div>
                        <div class="4u 12u$(small)">
                            <input type="radio" id="demo-priority-normal" name="demo-priority">
                            <label for="demo-priority-normal">Normal</label>
                        </div>
                        <div class="4u$ 12u$(small)">
                            <input type="radio" id="demo-priority-high" name="demo-priority">
                            <label for="demo-priority-high">High</label>
                        </div>
                        <div class="6u 12u$(small)">
                            <input type="checkbox" id="demo-copy" name="demo-copy">
                            <label for="demo-copy">Email me a copy</label>
                        </div>
                        <div class="6u$ 12u$(small)">
                            <input type="checkbox" id="demo-human" name="demo-human" checked>
                            <label for="demo-human">Not a robot</label>
                        </div>
                        <div class="12u$">
                            <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
                        </div>-->
                        <div class="12u$">
                            <ul class="actions">
                                <li><input type="button" value="Editar" @click="editarModelo"/></li>
                                <li><input type="button" value="Excluir" @click="excluirModelo($store.state.modeloRs._id)"/></li>
                                <li><input type="button" class="special" value="Voltar" @click="limparModelo"/></li>
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
                'excluirModelo'
                ]),
            salvarModelo() {

            }
        }
    }
</script>
