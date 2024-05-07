import React, { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

export function UserProfile(){
    const [nome, setName] = useState('');
    const [cognome, setSurname] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const token = Cookies.get('token');

        if (token) {
            const decodedToken = jwtDecode(token);
            const { nome, cognome, email } = decodedToken;

            setName(nome);
            setSurname(cognome);
            setEmail(email);
        }
    }, []);

    return (
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
                            {/*TO-DO funzione map sui corsi */}
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
    );
};

