import { useContext } from "react";
import { Navigate,useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContextProvider";

// import logContext from "./logContext";


const ProtectedRoute = ({children}) => {
    const  {currentUser} = useContext(AuthContext);

    if(!currentUser){
       return <Navigate to="/login"/>
    }
    return children;

    
}
export default ProtectedRoute;