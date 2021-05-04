new Vue ({

    el: '#desafio',
    data: {
        nome: 'Jeff',
        idade: 30,
        foto: 'https://avatars.githubusercontent.com/u/44186536?v=4'
    },
    methods: {
        multiplicaIdade: function(){
            return (this.idade * 3)
        },
        numeroAleatorio: function(){
            return Math.random()
        },
        texto: function(event){
            this.nome = event.target.value
        }
    }
})