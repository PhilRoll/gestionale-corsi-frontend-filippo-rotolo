import { Link } from "react-router-dom";

export function Welcome1() {
    return (
        <section className="welcome-section text-center py-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-8">
                    <div className="jumbotron">
                        <h1 className="display-4">Ciao, Benvenuto a GestionaleCorsi!</h1>
                        <p className="lead">Il tuo hub per l'apprendimento illimitato. Scopri nuovi orizzonti e competenze con i nostri corsi pensati per te.</p>
                        <hr className="my-4" />
                        <p>Inizia subito il tuo viaggio educativo!</p>
                        <Link to="/courses" className="btn btn-primary btn-lg">Esplora i Corsi</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}