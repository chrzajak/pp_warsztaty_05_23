import React, {FC, useEffect, useState} from "react";
import {Country} from "../models/Country";
import {useNavigate} from "react-router-dom";
import CountryAPI from "../api/CountryAPI";
import {useQuery} from "react-query";

const CountryListPage: FC = () => {
    const navigate = useNavigate();

    const {isLoading, data} = useQuery('countries', CountryAPI.getCountryList);

    return (
        <>
            <h1>Country list</h1>
            {isLoading && 'Loading ...'}
            {data && (
                <ul>
                    {data.map((country) => (
                            <li>{country.name.common}
                                <button onClick={() => navigate(`/details/${country.name.common}`)}>
                                    details
                                </button>
                            </li>
                        )
                    )}
                </ul>
            )}
        </>
    );
}

export default CountryListPage;