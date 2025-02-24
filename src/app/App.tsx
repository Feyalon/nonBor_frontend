import React from 'react';
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "../features/pages/router";

const App: React.FC = () => {
  return (
        <RouterProvider router={router} />
  );
};


export default App;

