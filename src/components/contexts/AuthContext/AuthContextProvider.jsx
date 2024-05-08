import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    nome: "",
    cognome: "",
    email: "",
    ruoli: [],
    isLogged: false
  });

  //ricarica i dati in caso di refresh della pagina
  useEffect(() => {

    const token = Cookies.get('token');

    if (token) {
        const decodedToken = jwtDecode(token);
        setUser({
          nome: decodedToken.nome,
          cognome: decodedToken.cognome,
          email: decodedToken.email,
          ruoli: decodedToken.ruoli,
          isLogged: true
        });
    }
  }, []);

  const resetContext = () => {
    // Azzeramento dei valori del contesto
    setUser({
      nome: "",
      cognome: "",
      email: "",
      ruoli: [],
      isLogged: false
    });
  };

  return (
    <AuthContext.Provider value={{ user, setUser, resetContext }}>
      {children}
    </AuthContext.Provider>
  );
}
