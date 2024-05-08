import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { Link } from 'react-router-dom';
import { GetUserInfoByEmail } from '../../../services/RESTservice';
import { UserInfo } from '../../Sections/UserInfo';
import { UserRoles } from '../../Sections/UserRoles';
import { UserCourses } from '../../Sections/UserCourses';
import { DiscoverCourses } from '../../Sections/DiscoverCourses';

export function UserProfile() {
    //user dal contesto
    const { user } = useContext(AuthContext);

    //stati del componente
    const [nome, setNome] = useState('');
    const [cognome, setCognome] = useState('');
    const [email, setEmail] = useState('');
    const [ruoli, setRuoli] = useState([]); 
    const [corsi, setCorsi] = useState([]); 

    //informazioni dell'utente
    useEffect(() => {
        if (user) {
            setNome(user.nome);
            setCognome(user.cognome);
            setEmail(user.email);
        }
    }, [user]);
    

    //effect per ottenere i ruoli e i corsi dell'utente
    useEffect(() => {
        const fetchData = async () => {
            if (email) {
                const userInfo = await GetUserInfoByEmail(email);
                setRuoli(userInfo.ruoli);
                setCorsi(userInfo.corsi);
            }
        };
        
        fetchData();
    }, [email]);

    return (
        <div className="container my-5">
            <UserInfo nome={nome} cognome={cognome} email={email} />
            <UserRoles ruoli={ruoli} />
            <UserCourses corsi={corsi} />
            <DiscoverCourses />
        </div>
    );
}