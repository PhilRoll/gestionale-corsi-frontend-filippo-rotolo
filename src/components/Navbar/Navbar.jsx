import { NavLink } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-fixed-top">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/courses">Courses</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}