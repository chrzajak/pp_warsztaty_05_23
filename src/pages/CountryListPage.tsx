import React, {FC, useEffect, useState} from "react";
import {Country} from "../models/Country";

const CountryListPage: FC = () => {
    const [countries, setCountries] = useState<Country[]>([]);

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
                        <li>{country.name.common}</li>
                    )
                )}
            </ul>
        </>
    );
}

export default CountryListPage;