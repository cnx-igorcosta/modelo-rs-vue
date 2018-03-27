<template>
    <div id="main" v-show="$store.state.resultados.length && !$store.state.modeloRs._id" >
        <section id="intro" class="main">
            <div class="spotlight">
                <div class="content">
                    <header class="major">
                        <h2>Resultado da busca</h2>
                    </header>
                    <div class="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Descrição</th>
                                    <th>Número da RS</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr 
                                    v-for="(res, index) in $store.state.resultados"
                                    :key="index">
                                    <td>{{res.descricao}}</td>
                                    <td>{{res.numero}}</td>
                                    <td>
                                        <a 
                                            href="#main" 
                                            class="button small special" 
                                            @click="detalharModelo(res)">
                                                Detalhes
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        methods: mapActions([
            'detalharModelo'
        ]),
    }
</script>