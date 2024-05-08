import React from 'react';
import { Link } from 'react-router-dom';

export function UserInfo({ nome, cognome, email }) {
    return (
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
    );
}
