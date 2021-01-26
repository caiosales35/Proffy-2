import React, { createContext, useState } from "react";
import api from "../services/api";

interface AuthContextData {
  signed: boolean;
  signIn(email: string, password: string): Promise<void>;
  logOut(): void;
  user_id: number;
  email: string;
  name: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [userId, setUserId] = useState(NaN);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");

  async function signIn(email: string, password: string) {
    const response = await api.post("/login", {
      email,
      password,
    });
    api.defaults.headers.Authorization = `Baerer ${response.data.token}`;
    setUserId(response.data.user_id);
    setUserEmail(response.data.email);
    setUserName(response.data.name);
  }

  function logOut() {
    api.defaults.headers.Authorization = undefined;
    setUserId(NaN);
    setUserEmail("");
    setUserName("");
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!userId,
        signIn,
        logOut,
        user_id: userId,
        email: userEmail,
        name: userName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
