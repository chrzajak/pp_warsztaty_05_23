import React from 'react';
import './App.css';
import {RouterProvider} from "react-router-dom";
import router from "./router";
import {QueryClient, QueryClientProvider} from "react-query";

function App() {
  const queryClient = new QueryClient({
      defaultOptions: {
          queries: {
              cacheTime: 3 * 60 * 1000,
              staleTime: 3 * 60 * 1000
          }
      }
  });

  return (
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
  )
}

export default App;
