import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderButton } from "../Buttons/HeaderButton";

export function Navbar() {
    // Definire uno stato per gestire l'apertura/chiusura del menu
    const [isMenuOpen, setMenuOpen] = useState(false);

    // Funzione per gestire la chiusura del menu quando si seleziona un elemento
    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setMenuOpen(!isMenuOpen)} // Toggle per aprire/chiusura del menu
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent"> {/* Se il menu è aperto, aggiungo la classe "show" */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink className="nav-item nav-link" to="" aria-current="page" onClick={handleMenuClose}>Home</NavLink>
                        <NavLink className="nav-item nav-link" to="/courses" aria-current="page" onClick={handleMenuClose}>Corsi</NavLink>
                    </ul>
                </div>
                <HeaderButton />
            </div>
        </nav>
    );
}
