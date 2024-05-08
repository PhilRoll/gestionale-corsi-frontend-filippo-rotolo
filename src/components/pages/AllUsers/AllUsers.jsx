import React, { useEffect, useState } from 'react';
import { GetAllUsers, DeleteUser } from '../../../services/RESTservice';
import Cookies from 'js-cookie';
import { UsersTable } from '../../Tables/UsersTable';

export function AllUsers() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const listUsers = await GetAllUsers(Cookies.get('token'));
            setUsers(listUsers);
        };
    
        fetchData();
    }, []);

    const handleDeleteUser = async (email) => {
        const confirmDelete = window.confirm("Sei sicuro di voler eliminare questo utente?");
        if (confirmDelete) {
            const response = await DeleteUser(email);
            if (response.ok) {
                console.log('Utente eliminato con successo');
                //setta nuovo array che contiene tutti gli utenti tranne quello con l'email specificata
                setUsers(users.filter(user => user.email !== email));  
            } else {
                console.error('Errore durante l\'eliminazione dell\'utente');
            }
        }
    };

    return (
        <div className="container" style={{ height: "100vh"}}>
            <h2 className="my-4">Elenco Utenti</h2>
            <UsersTable users={users} handleDeleteUser={handleDeleteUser} /> 
        </div>
    );
}