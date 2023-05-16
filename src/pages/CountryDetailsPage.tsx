import {useEffect, useState} from "react";
import {CountryDetails} from "../models/CountryDetails";
import {useNavigate, useParams} from "react-router-dom";

const CountryDetailsPage = () => {
    let {countryName} = useParams();
    const [country, setCountry]
        = useState<CountryDetails | undefined>(undefined);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fields=name,area,population,capital`,
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
        <>
        <h1>{countryName} - country details</h1>
            area: {country?.area}<br></br>
            capital: {country?.capital
            .map((capital, index) => (index > 0) ? `, ${capital}` : capital)}<br></br>
            <button onClick={() => navigate('/')}>Back</button>
        </>
    )
}

export default CountryDetailsPage;