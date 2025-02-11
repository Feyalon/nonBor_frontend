import React from "react";
import "./App.css";
import { RouterProvider } from "react-router";
import router from "../features/pages/router";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="app">
      <RouterProvider  router={router}/>
    </div>
  );
};

export default App;
