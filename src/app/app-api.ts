import axios from "axios";

export const instance = axios.create({
    baseURL: "https://restcountries.com/v2/"
})
export const appAPI = {
    getCountries() {
        return instance.get('all?fields=name,capital,flags,population,region')
    },
    getCountryByName(name: string) {
        return instance.get(`name/${name}`)
    },
    getCountrysByCode(codes: string[]) {
        return instance.get(`alpha?codes=${codes.join(',')}`)
    }
}