//fetch di registrazione
export async function UserRegister(body){

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
export async function UserLogin(body){

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