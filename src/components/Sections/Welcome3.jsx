import { Link } from "react-router-dom";

export function Welcome3() {
    return (
        <section className="inspiration-section py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body text-center">
                            <h2 className="card-title">Scopri Nuovi Mondi</h2>
                            <p className="card-text">Con GestionaleCorsi, ogni corso è un'opportunità di esplorare nuovi interessi, affinare le tue competenze e realizzare i tuoi sogni.</p>
                            <Link to="/courses" className="btn btn-primary btn-lg">Inizia Ora</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}