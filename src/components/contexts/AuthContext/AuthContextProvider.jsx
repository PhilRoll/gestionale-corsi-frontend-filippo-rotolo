import { AuthContext } from "./AuthContext";
import { useState } from "react";
import React from "react";


export function AuthContextProvider({ children }) {
  // Stato per gestire le informazioni sull'utente
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isLogged: false, // Inizialmente l'utente non è loggato
    isAuthorized: false, // Inizialmente l'utente non ha autorizzazioni
  });

  // Funzione per effettuare il login
  const login = () => {
    // Simulazione di una richiesta di login
    // Dopo aver autenticato l'utente, impostiamo isLogged su true e isAuthorized a seconda del ruolo o dei permessi
    setUser((prevState) => ({
      ...prevState,
      isLogged: true,
      isAuthorized: true
      // Esempio: potrebbe essere impostato a true se l'utente ha un certo ruolo o livello di autorizzazione
    }));
  };

  // Funzione per effettuare il logout
  const logout = () => {
    // Simulazione di una richiesta di logout
    // Dopo aver eseguito il logout, reimpostiamo isLogged su false e isAuthorized su false
    setUser((prevState) => ({
      ...prevState,
      isLogged: false
      
    }));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
