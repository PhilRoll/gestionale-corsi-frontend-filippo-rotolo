import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { useContext, useEffect } from "react";

export function ProtectedRoute({ children }) {
    const { user } = useContext(AuthContext);
    const navigateTo = useNavigate();

    useEffect(() => {
        if (user && !user.ruoli.includes('Admin')) {
            navigateTo("/");
        }
    }, []);

    return (
        <>{children}</>
    );
}