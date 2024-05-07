import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

export function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove('token');
        //TODO fetch sul db di logout
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