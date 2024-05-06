import { NavLink } from "react-router-dom";

export function SignInSignUp() {
    return (
        <div className="ml-auto">
            <NavLink className="btn btn-outline-primary" activeClassName="active" to="/login">Login</NavLink>
            <span style={{ marginRight: '10px' }} />
            <NavLink className="btn btn-primary" activeClassName="active" to="/register">Registrati</NavLink>
            <span style={{ marginRight: '10px' }} />
        </div>
    );
}