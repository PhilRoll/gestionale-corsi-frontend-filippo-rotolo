import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { Link } from 'react-router-dom';

export function UserProfile() {
    // Dal contesto
    const { user } = useContext(AuthContext);

    // Stati del componente
    const [nome, setNome] = useState('');
    const [cognome, setCognome] = useState('');
    const [email, setEmail] = useState('');
    const [corsi, setCorsi] = useState([]); 

    //effect
    useEffect(() => {
        if (user) {
            setNome(user.nome);
            setCognome(user.cognome);
            setEmail(user.email);
            setCorsi(user.corsi); 
        }
    }, [user]);

    return (
        <>
            <div className="container">
                <section className="mt-5">
                    <h2>Profilo di {nome} {cognome}</h2>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Informazioni personali</h5>
                            <p className="card-text"><strong>Nome:</strong> {nome}</p>
                            <p className="card-text"><strong>Cognome:</strong> {cognome}</p>
                            <p className="card-text"><strong>Email:</strong> {email}</p>
                            <Link to="/user/update" className="btn btn-primary mt-3">Modifica Profilo</Link>
                        </div>
                    </div>
                </section>

                <section className="mt-5">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Corsi Iscritti</h2>
                            <ul className="list-group list-group-flush">
                                
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mt-5">
                    <h2>Scopri Nuovi Corsi</h2>
                    <p>Esplora i nostri corsi e trova quello più adatto alle tue esigenze!</p>
                    <Link to="/corsi" className="btn btn-primary">Vai a Tutti i Corsi</Link>
                </section>
            </div>
        </>
    );
};
