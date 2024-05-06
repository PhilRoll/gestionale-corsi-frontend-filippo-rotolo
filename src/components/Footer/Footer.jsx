import { NavLink } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <NavLink to="" className="nav-link px-2 text-muted">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/courses" className="nav-link px-2 text-muted">Corsi</NavLink>
                </li>
            </ul>
            <p className="text-center text-muted">© {new Date().getFullYear()} Il Mio Sito</p>
        </footer>

    );
}