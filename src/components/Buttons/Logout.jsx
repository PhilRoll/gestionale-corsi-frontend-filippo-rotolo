import { NavLink } from "react-router-dom";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

export function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Cancella il cookie
        Cookies.remove('token');
        // Reindirizza alla homepage
        navigate('/');
    };

    return (
        <div className="ml-auto">
            <button className="btn btn-outline-primary" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}