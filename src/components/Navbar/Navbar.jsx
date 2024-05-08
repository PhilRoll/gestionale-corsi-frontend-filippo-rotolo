import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderButton } from "../Buttons/HeaderButton";
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

export function Navbar() {
    // Definire uno stato per gestire l'apertura/chiusura del menu
    const [isMenuOpen, setMenuOpen] = useState(false);

    //context dell'utente
    const {user} = useContext(AuthContext);

    // Funzione per gestire la chiusura del menu quando si seleziona un elemento
    const handleMenuClose = () => {
        setMenuOpen(false);
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Per una transizione più fluida
        });
    };


    //componenti per gli admin:
    let navLinkAllUser = <></>
    if (user && user.ruoli.includes("Admin")) {
        navLinkAllUser = 
        <>
        <NavLink className="nav-item nav-link" to="/user/allusers" aria-current="page" onClick={handleMenuClose}>Gestione Utenti</NavLink>
        <NavLink className="nav-item nav-link" to="/courses/create" aria-current="page" onClick={handleMenuClose}>Crea Corso</NavLink>
        </>
    }

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
                        
                        {user.isLogged ? (
                            <NavLink className="nav-item nav-link" to="/user/profile" aria-current="page" onClick={handleMenuClose}>Profilo</NavLink>
                        ) : (
                            <></>
                        )}
                        <NavLink className="nav-item nav-link" to="/courses" aria-current="page" onClick={handleMenuClose}>Corsi</NavLink>
                        
                        {navLinkAllUser}
                    </ul>
                </div>
                {user.isLogged ? <HeaderButton /> : <HeaderButton />}
            </div>
        </nav>
    );
}
