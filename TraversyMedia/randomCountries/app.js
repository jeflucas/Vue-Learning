const app = Vue.createApp({
  data() {
    return {
      countryName: "Brazil",
      capital: "Brasília",
      region: "Americas",
      population: 206135893,
      flag: "https://restcountries.eu/data/bra.svg",
    };
  },
  methods: {
      async getCountry(){
        const res = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await res.json()

        this.countryName = data[0].name,
        this.capital = data[0].capital,
        this.region = data[0].region,
        this.population = data[0].population,
        this.languageName = data[0].languages.name,
        this.flag = data[0].flag
      },
  },
});

app.mount("#app");
