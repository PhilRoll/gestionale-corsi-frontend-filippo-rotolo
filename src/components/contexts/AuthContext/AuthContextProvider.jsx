import { AuthContext } from "./AuthContext";
import { useState } from "react";
import React from "react";


export function AuthContextProvider({ children }) {
  // Stato per gestire le informazioni sull'utente
  const [user, setUser] = useState({
    nome: "",
    cognome: "",
    email: "",
    isLogged: false,
    ruolo: ""
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
