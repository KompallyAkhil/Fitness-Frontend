import React  from "react";
import "./App.css";
import { Route,Routes, Navigate} from "react-router-dom";
import Login from "./Components/Login/Login"
import Fit from "./Components/Fit/Fit";
import ProtectedRoutes from "./ProtectedRoutes";
const App = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Navigate to="/Login" />} />
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/" element={<ProtectedRoutes/>}>
                <Route path="/Fit" element={<Fit/>}></Route>
            </Route>
        </Routes>
        </>
    );
};

export default App;
