import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Benvenuto al nostro sito!</h1>
                <p className="lead">Grazie per aver scelto di visitare il nostro sito. Scopri i nostri fantastici corsi e inizia il tuo viaggio verso nuove conoscenze e opportunità!</p>
                <hr className="my-4" />
                <p>Se sei pronto per iniziare, dai un'occhiata ai nostri corsi qui sotto.</p>
                <Link to="/courses" className="btn btn-primary btn-lg">Vai ai Corsi</Link>
            </div>
        </div>
    );
}