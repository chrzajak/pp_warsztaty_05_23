import {useEffect, useState} from "react";
import {CountryDetails} from "../models/CountryDetails";
import {useNavigate, useParams} from "react-router-dom";
import CountryAPI from "../api/CountryAPI";

const CountryDetailsPage = () => {
    let {countryName} = useParams();
    const [country, setCountry]
        = useState<CountryDetails | undefined>(undefined);
    const navigate = useNavigate();

    useEffect(() => {
        countryName && CountryAPI.getCountryDetails(countryName)
            .then((data) => setCountry(data));
    }, [countryName]);

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