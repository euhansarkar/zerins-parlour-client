import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {



    const AuthInfo = {}

    return (
        <AuthContext.Provider value={AuthInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;