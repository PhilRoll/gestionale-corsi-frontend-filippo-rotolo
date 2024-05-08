import { GetAllCourses } from "../../../services/RESTservice";
import { CourseCard } from "../../Cards/CourseCard";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";


export function Courses() {

    const [corsi, setCorsi] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const listUsers = await GetAllCourses(Cookies.get('token'));
                setCorsi(listUsers);
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchData();
    }, []);

    useEffect(() => {
        console.log(corsi)
    }, [corsi])

    return (
        <>
            <div className="container-fluid">
                <div className="jumbotron">
                    <h1 className="display-4">I nostri corsi!</h1>
                    <p className="lead">Scopri i nostri fantastici corsi e inizia il tuo viaggio verso nuove conoscenze e opportunità!</p>
                    <hr className="my-4" />
                </div>
            </div>

            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                    {corsi.map((corso, index) => (
                        <div className="col" key={index}>
                            <CourseCard {...corso} />
                        </div>
                    ))}
                </div>
                <hr className="my-4" />
            </div>
        </>
    );
}