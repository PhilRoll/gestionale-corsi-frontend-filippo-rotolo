import { Link } from 'react-router-dom';
import { RegistrationForm } from '../../Forms/RegistrationForm';
import { GetAllUsers } from '../../../services/RESTservice';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { UserCard } from '../../Cards/UserCard';


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

    useEffect(() => {
        console.log(users)
    }, [users])

    
    return (
        <>
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                    {users?.map((user, index) => (
                        <div className="col" key={index}>
                            <UserCard nome={user.nome} cognome={user.cognome} email={user.email} ruoli={user.ruoli} corsi={user.corsi} />
                        </div>
                    ))}
                </div>
                <hr className="my-4" />
            </div>
        </>
    );
}