import React, {FC, useEffect, useState} from "react";
import {Country} from "../models/Country";
import {useNavigate} from "react-router-dom";
import CountryAPI from "../api/CountryAPI";

const CountryListPage: FC = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        CountryAPI.getCountryList().then((data) => {
            setCountries(data);
        })
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