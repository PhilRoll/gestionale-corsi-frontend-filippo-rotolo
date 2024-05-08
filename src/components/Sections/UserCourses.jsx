import React, { useState } from 'react';

export function UserCourses({ corsi }) {
    const [dettagliCorso, setDettagliCorso] = useState({});

    // Funzione per gestire l'espansione dei dettagli del corso
    const handleShowMore = (index) => {
        setDettagliCorso(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <section className="mt-5">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Corsi Iscritti</h2>
                    {corsi.length === 0 ? (
                        <p>Non sei iscritto ad alcun corso.</p>
                    ) : (
                        <ul className="list-group list-group-flush">
                            {corsi.map((corso, index) => (
                                <li key={index} className="list-group-item">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span>{corso.nomeCorso}</span>
                                        <button className="btn btn-link" onClick={() => handleShowMore(index)}>
                                            {dettagliCorso[index] ? "Nascondi dettagli" : "Mostra dettagli"}
                                        </button>
                                    </div>
                                    {dettagliCorso[index] && (
                                        <div>
                                            <p><strong>Descrizione:</strong> {corso.descrizioneCompleta}</p>
                                            <p><strong>Durata:</strong> {corso.durata}</p>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
}
