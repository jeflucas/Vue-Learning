const app = Vue.createApp({
    data() {
        return {
            countryName: 'Brazil',
            capital: 'Brasília',
            region: 'Americas',
            population: 206135893,
            languageName: 'Portuguese',
            flag: "https://restcountries.eu/data/bra.svg"
        }
    }
})

app.mount('#app')