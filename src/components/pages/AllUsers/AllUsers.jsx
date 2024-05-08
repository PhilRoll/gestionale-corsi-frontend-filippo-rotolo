import React, { useEffect, useState } from 'react';
import { GetAllUsers, DeleteUser } from '../../../services/RESTservice';
import Cookies from 'js-cookie';

export function AllUsers() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const listUsers = await GetAllUsers(Cookies.get('token'));
                setUsers(listUsers);
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchData();
    }, []);

    const handleDeleteUser = async (email) => {
        const confirmDelete = window.confirm("Sei sicuro di voler eliminare questo utente?");
        if (confirmDelete) {
            try {
                const response = await DeleteUser(email);
                if (response.ok) {
                    console.log('Utente eliminato con successo');
                    setUsers(users.filter(user => user.email !== email));
                } else {
                    console.error('Errore durante l\'eliminazione dell\'utente');
                }
            } catch (error) {
                console.error('Errore durante l\'eliminazione dell\'utente:', error);
            }
        }
    };

    return (
        <div className="container" style={{ height: "100vh"}}>
            <h2 className="my-4">Elenco Utenti</h2>
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
        </div>
    );
}
