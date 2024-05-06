import { Link } from 'react-router-dom';

export function Registration() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6">
                    <div className="jumbotron">
                        <h1 className="display-4">Crea un nuovo account</h1>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">Nome</label>
                                <input type="text" className="form-control" id="exampleInputName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputLastName" className="form-label">Cognome</label>
                                <input type="text" className="form-control" id="exampleInputLastName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail" className="form-label">Indirizzo email</label>
                                <input type="email" className="form-control" id="exampleInputEmail" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputConfirmPassword" className="form-label">Conferma password</label>
                                <input type="password" className="form-control" id="exampleInputConfirmPassword" />
                            </div>
                            <button type="submit" className="btn btn-primary">Registrati</button>
                        </form>
                        <hr className="my-4" />
                        <p>Hai già un account? <Link to="/login">Accedi qui</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}