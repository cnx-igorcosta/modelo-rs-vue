<template>
  <div>
    <header id="header" class="alt">
        <span class="logo"><img src="../images/logo.svg" alt="" /></span>
        <h1>Google das RS</h1>
        <p>Digite uma palavra chave para encontrar o modelo de RS</p>
        <section>
            <form>
                <div class="row uniform">
                    <div class="12u 12u$(xsmall)" v-show="$store.state.mensagem.length">
                        {{$store.state.mensagem}}
                    </div>
                    <div class="7u 12u$(xsmall)">
                        <input 
                            type="text" 
                            placeholder="Modelo de RS" 
                            v-model="textoBusca" 
                            @keydown.enter.prevent="search"/>
                    </div>
                    <div class="5u 12u$(xsmall)">
                        <a 
                            class="button special" 
                            @click="search()">
                                Buscar
                        </a>
                        <a 
                            href="#principal" 
                            class="button" 
                            @click="novoModelo">
                                Novo
                        </a>    
                    </div>
                </div>
            </form>
        </section>    
    </header>
  </div>
</template>
<script>
    import { mapActions } from 'vuex'
    export default {
         data() {
            return {
                textoBusca: ''
            }
        },
        methods: {
            ...mapActions([
            'buscarModelos',
            'novoModelo'
            ]),
            search() {
                if(this.textoBusca) {
                    this.buscarModelos(this.textoBusca)
                }
            }
        },
    }
</script>
