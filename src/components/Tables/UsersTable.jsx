export function UsersTable({ users, handleDeleteUser }) {
    return (
        <div className="table-responsive">
            <table className="table table-bordered table-striped">
                <thead className="table">
                    <tr>
                        <th>Nome</th>
                        <th>Cognome</th>
                        <th>Email</th>
                        <th>Ruoli</th>
                        <th>Corsi</th>
                        <th>Modifica</th>
                        <th>Elimina</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.nome}</td>
                            <td>{user.cognome}</td>
                            <td>{user.email}</td>
                            <td>
                                <ul>
                                    {user.ruoli.map((ruolo, index) => (
                                        <li key={index}>{ruolo.tipologia}</li>
                                    ))}
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    {user.corsi.map((corso, index) => (
                                        <li key={index}>{corso.nomeCorso}</li>
                                    ))}
                                </ul>
                            </td>
                            <td>
                                <a href={`/user/update/${user.email}`} className="btn btn-outline-secondary btn-sm">Modifica</a>
                            </td>
                            <td>
                                <button onClick={() => handleDeleteUser(user.email)} className="btn btn-outline-danger btn-sm">Elimina</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}