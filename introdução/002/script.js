new Vue ({
    el: '#app',
    data: {
        titulo: 'Opa'
    },
    methods: {
        alteraTitulo(event){
            this.titulo = event.target.value
        }
    },
})