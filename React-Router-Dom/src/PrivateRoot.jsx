import { Navigate } from "react-router-dom";

export default function PrivateRoot({ user, childeren}) {

    if(!user?.id){
        return <Navigate to="/login" replace />
    }
    return childeren
}