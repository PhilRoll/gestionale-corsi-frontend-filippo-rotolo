import React from 'react';
import { Link } from 'react-router-dom';

export function DiscoverCourses() {
    return (
        <section className="mt-5">
            <h2>Scopri Nuovi Corsi</h2>
            <p>Esplora i nostri corsi e trova quello più adatto alle tue esigenze!</p>
            <Link to="/corsi" className="btn btn-primary">Vai a Tutti i Corsi</Link>
        </section>
    );
}
