import {createBrowserRouter} from "react-router-dom";
import CountryListPage from "./pages/CountryListPage";
import React from "react";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <CountryListPage />
    },
    {
        path: '/details/:countryName',
        element: <CountryDetailsPage />
    },
    {
        path: '/error',
        element: <ErrorPage />
    }
]);

export default router;