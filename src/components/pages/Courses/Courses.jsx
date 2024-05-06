import { CourseCard } from "../../CourseCard";

const corsi = [
    {
        nomeCorso: "Java",
        descrizioneBreve: "corso di Java",
        descrizioneCompleta: "descrizione lunga del corso di Java",
        durata: "200"
    },
    {
        nomeCorso: "Python",
        descrizioneBreve: "corso di Python",
        descrizioneCompleta: "descrizione lunga del corso di Python",
        durata: "150"
    },
    {
        nomeCorso: "JavaScript",
        descrizioneBreve: "corso di JavaScript",
        descrizioneCompleta: "descrizione lunga del corso di JavaScript",
        durata: "180"
    },
    {
        nomeCorso: "React",
        descrizioneBreve: "corso di React",
        descrizioneCompleta: "descrizione lunga del corso di React",
        durata: "120"
    },
    {
        nomeCorso: "HTML & CSS",
        descrizioneBreve: "corso di HTML & CSS",
        descrizioneCompleta: "descrizione lunga del corso di HTML & CSS",
        durata: "100"
    }
];


export function Courses() {
    return (
        <>
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">I nostri corsi!</h1>
                    <p className="lead">Scopri i nostri fantastici corsi e inizia il tuo viaggio verso nuove conoscenze e opportunità!</p>
                    <hr className="my-4" />
                </div>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
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