import {useNavigate, useParams} from "react-router-dom";
import CountryAPI from "../api/CountryAPI";
import {useQuery} from "react-query";

const CountryDetailsPage = () => {
    let {countryName} = useParams();
    const navigate = useNavigate();

    const {isLoading, data} = useQuery(`country-details-${countryName}`, () => CountryAPI.getCountryDetails(countryName || ''))

    return (
        <>
        <h1>{countryName} - country details</h1>
            {isLoading && 'Loading ...'}
            {data && (
                <>
                    area: {data?.area}<br></br>
                    capital: {data?.capital
                    .map((capital, index) => (index > 0) ? `, ${capital}` : capital)}<br></br>
                    <button onClick={() => navigate('/')}>Back</button>
                </>
            )}
        </>
    )
}

export default CountryDetailsPage;