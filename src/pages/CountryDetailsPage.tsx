import {useEffect, useState} from "react";
import {CountryDetails} from "../models/CountryDetails";

const CountryDetailsPage = () => {
    const [country, setCountry]
        = useState<CountryDetails | undefined>(undefined);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/eesti?fields=name,area,population,capital`,
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(
            (response) => {
                return response.json()
            }).then((data) =>
            setCountry(data ? data[0] : undefined)
        )
    }, []);

    return (
        <h1>Country Details</h1>
    )
}

export default CountryDetailsPage;