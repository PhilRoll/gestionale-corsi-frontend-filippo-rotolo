import { NavLink } from "react-router-dom";
export function Logout() {
    return (
        <div className="ml-auto">
            <NavLink className="btn btn-dark" activeClassName="active" to="/logout">Logout</NavLink>
            <span style={{ marginRight: '10px' }} />
        </div>
    );
}