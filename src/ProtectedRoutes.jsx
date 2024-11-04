import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoutes = () => {
    const token = localStorage.getItem('Username');
    return token ? <Outlet /> : <Navigate to="/Login" />;
};

export default ProtectedRoutes;
