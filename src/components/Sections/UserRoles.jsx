import React from 'react';

export function UserRoles({ ruoli }) {
    return (
        <section className="mt-5">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Ruoli</h2>
                    {ruoli.length === 0 ? (
                        <p>Al momento non hai alcun ruolo.</p>
                    ) : (
                        <ul>
                            {ruoli.map((ruolo, index) => (
                                <li key={index}>{ruolo.tipologia}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
}
