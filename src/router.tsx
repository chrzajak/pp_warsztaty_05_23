import {createBrowserRouter} from "react-router-dom";
import CountryListPage from "./pages/CountryListPage";
import React from "react";

const router = createBrowserRouter([
    {
        path: '/',
        element: <CountryListPage />
    },
    {
        path: '/details/:countryName',
        element: (<></>)
    }
]);

export default router;