import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Registration/Registration";
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Registration/>
     
        <Routes>
       
          <Route>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
};

export default App;
