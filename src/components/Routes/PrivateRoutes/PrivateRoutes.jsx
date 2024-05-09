import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import load from '../../../assets/images/Ripple@1x-1.0s-200px-200px.svg'

 
const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className="h-[70vh] w-full flex items-center justify-center"><p className="text-3xl">{load}</p></div>
    }
    if(user) {
        return children
    }
    return <Navigate to="/login" state={location.pathname} replace={true} />
};

export default PrivateRoutes;