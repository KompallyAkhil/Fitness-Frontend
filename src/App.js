import React  from "react";
import "./App.css";
import { Route,Routes } from "react-router-dom";
import Login from "./Components/Login/Login"
import Fit from "./Components/Fit/Fit";
const App = () => {
    return (
        <>
      
        <Routes>
            <Route index element={<Login/>}></Route>
            <Route path="/Fit" element={<Fit/>}></Route>
        </Routes>
       
          
        </>
    );
};

export default App;
