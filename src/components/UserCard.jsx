import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DeleteUser } from '../services/RESTservice';

export function UserCard({ nome, cognome, email, ruoli, corsi }) {

    useEffect(()=>{
        console.log(nome, cognome, email, ruoli, corsi);
    }, [])

    const handleDeleteUser = async () => {
        const response = await DeleteUser(email);
        if (response.ok) {
            // Aggiorna lo stato o esegui altre azioni necessarie dopo l'eliminazione dell'utente
            console.log('Utente eliminato con successo');
        } else {
            console.error('Errore durante l\'eliminazione dell\'utente');
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{nome} {cognome}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Ruoli:</h6>
                <ul>
                    {ruoli.map((ruolo, index) => (
                        <li key={index}>{ruolo.tipologia}</li>
                    ))}
                </ul>
                <h6 className="card-subtitle mb-2 text-muted">Corsi:</h6>
                <ul>
                    {corsi.map((corso, index) => (
                        <li key={index}>{corso.nomeCorso}</li>
                    ))}
                </ul>
                <Link to={`/user/update/${email}`} className="btn btn-outline-secondary btn-sm">Modifica</Link>
                <button onClick={handleDeleteUser} className="btn btn-outline-danger btn-sm">Elimina</button>
            </div>
        </div>
    );
}