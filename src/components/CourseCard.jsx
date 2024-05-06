import { Link } from 'react-router-dom';

export function CourseCard({ nomeCorso, descrizioneBreve, descrizioneCompleta, durata }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{nomeCorso}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{descrizioneBreve}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{durata} ore</h6>
                <p className="card-text">{descrizioneCompleta}</p>
                <Link to="/iscrizione" className="btn btn-primary">Iscriviti</Link>
            </div>
        </div>
    );
}