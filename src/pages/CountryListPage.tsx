import React, {FC, useEffect, useState} from "react";
import {Country} from "../models/Country";
import {useNavigate} from "react-router-dom";

const CountryListPage: FC = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all?fields=name`,
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(
            (response) => {
                return response.json()
            }).then((data) =>
            setCountries(data)
        )
    }, []);

    return (
        <>
            <h1>Country list</h1>
            <ul>
                {countries.map((country) => (
                        <li>{country.name.common}
                            <button onClick={() => navigate(`/details/${country.name.common}`)}>
                                details
                            </button>
                        </li>
                    )
                )}
            </ul>
        </>
    );
}

export default CountryListPage;