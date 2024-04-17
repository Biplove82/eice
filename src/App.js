import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Registration/Registration";
import ShowData from "./Registration/ShowData";
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Registration/>
      <ShowData/>
     
        <Routes>
       
          <Route>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
};

export default App;
