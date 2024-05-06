import { NavLink } from 'react-router-dom';
import { HeaderButton } from './HeaderButton';

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
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
                <div className="d-flex align-items-center">
                    <HeaderButton />
                </div>
            </div>
        </nav>
    );
}
