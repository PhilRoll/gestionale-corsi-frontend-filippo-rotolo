import { NavLink } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="footer mt-auto py-3 bg-light">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/courses">Corsi</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <p>&copy; {new Date().getFullYear()} Il mio Sito</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}