import { Link } from 'react-router-dom';

export function Login() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6">
                    <div className="jumbotron">
                        <h1 className="display-4">Accedi al nostro sito</h1>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Indirizzo email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Ricordami</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Accedi</button>
                        </form>
                        <hr className="my-4" />
                        <p>Non hai un account? <Link to="/register">Registrati qui</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}