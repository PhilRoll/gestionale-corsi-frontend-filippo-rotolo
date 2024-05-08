//fetch di registrazione utente
export async function UserRegister(body) {

    const jsonBody = JSON.stringify(body);

    const response = await fetch("http://localhost:8080/api/utente/registrazione", {
        mode: "cors",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer token_value"
        },
        body: jsonBody,
    });

    return response;
}




//fetch di login
export async function UserLogin(body) {

    const jsonBody = JSON.stringify(body);

    const response = await fetch("http://localhost:8080/api/utente/login", {
        mode: "cors",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer token_value"
        },
        body: jsonBody,
    });

    return response;
}




// fetch di eliminazione utente
export async function DeleteUser(email, JWTtoken) {
    const response = await fetch(`http://localhost:8080/api/utente/elimina/${email}`, {
        mode: "cors",
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JWTtoken}`
        }
    });

    return response;
}



// fetch che restituisce la lista di tutti gli utenti
export async function GetAllUsers(JWTtoken) {
        const response = await fetch("http://localhost:8080/api/utente/tutti_gli_utenti", {
            mode: "cors",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JWTtoken}`
            }
        });

        const data = await response.json();
        return data;
}




// fetch che restituisce la lista di tutti i corsi
export async function GetAllCourses() {
    const response = await fetch("http://localhost:8080/api/corso/corsi", {
        mode: "cors",
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer token_value"
        }
    });

    const data = await response.json();
    return data;
}



//fetch creazione di un corso  (VERSIONE CON WWTtoken, ma non funziona sul backend)
/*export async function CreateCourseToken(body, JWTtoken) {
    
    console.log(JWTtoken);
    const jsonBody = JSON.stringify(body);

    const response = await fetch("http://localhost:8080/api/corso/crea", {
        mode: "cors",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JWTtoken}`
        },
        body: jsonBody,
    });

    return response;
}
*/

//fetch creazione di un corso 
export async function CreateCourse(body) {

    const jsonBody = JSON.stringify(body);

    const response = await fetch("http://localhost:8080/api/corso/crea", {
        mode: "cors",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer token_value"
        },
        body: jsonBody,
    });

    return response;
}


// fetch categorie (dei corsi)
export async function GetAllCategories() {
    const response = await fetch("http://localhost:8080/api/categoria/categorie", {
        mode: "cors",
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer token_value"
        }
    });

    const data = await response.json();
    return data;
}


// fetch info singolo utente (utile per visualizzare la lista dei corsi di un utente)
export async function GetUserInfoByEmail(email) {
   const response = await fetch(`http://localhost:8080/api/utente/infoutente/${email}`, {
        mode: "cors",
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer token_value"
        }
    });

    const data = await response.json();
    return data;
}