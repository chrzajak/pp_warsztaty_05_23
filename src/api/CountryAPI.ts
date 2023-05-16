import Api from "./Api";
import {Country} from "../models/Country";
import {CountryDetails} from "../models/CountryDetails";


const CountryAPI = {
    getCountryList: () => {
        return Api.get<Country[]>('/all?fields=name')
            .then((res) => res.data)
    },
    getCountryDetails: (countryName: string) => {
        return Api.get<CountryDetails[]>(`/name/${countryName}?fields=name,area,population,capital`)
            .then((res) => res.data[0])
    }
}

export default CountryAPI;