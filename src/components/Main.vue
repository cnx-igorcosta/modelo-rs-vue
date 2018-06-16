<template>
    <div id="app">
        <div id="wrapper">
            <Buscador />
            <div id="principal">
                <Resultados />
                <Detalhe />
                <Edicao />
            </div>
            <footer id="footer">
                <p class="copyright">&copy; Developed by: <a target="blank" href="https://github.com/igorgcosta">Igor Costa</a>.</p>
                <p class="copyright">&copy;Template by: <a target="blank" href="https://html5up.net/">HTML5 UP</a>.</p> 
            </footer>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import Buscador from './Buscador.vue'
    import Resultados from './Resultados.vue'
    import Detalhe from './Detalhe.vue'
    import Edicao from './Edicao.vue'

    export default {
        components: {
            Buscador,
            Resultados,
            Detalhe,
            Edicao
        }
    }
</script>
