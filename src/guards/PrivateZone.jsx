import { Navigate } from "react-router-dom";

const PrivateZone = ({ children }) => {

const user = localStorage.getItem("user");

return user ? children : <Navigate to="/signin" />;

};

export default PrivateZone;