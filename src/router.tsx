import {createBrowserRouter} from "react-router-dom";
import CountryListPage from "./pages/CountryListPage";
import React from "react";
import CountryDetailsPage from "./pages/CountryDetailsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <CountryListPage />
    },
    {
        path: '/details/:countryName',
        element: <CountryDetailsPage />
    }
]);

export default router;