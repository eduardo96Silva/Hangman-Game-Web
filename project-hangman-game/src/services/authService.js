import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";

export const logIn = async (email, senha) => {
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;

        if (!user.emailVerified) {
            await signOut(auth);
            return 'Email Verification';

        } else {

            return 'Success';
        }

    } catch (error) {
        return 'Invalid Credentials';
    }
}

export const logOut = async (auth) => {
    try {
        signOut(auth)
        localStorage.clear()
        console.log('Usuário desconectado com sucesso')    

    } catch (error) {
        console.log(error)
        console.log('Não foi possível fazer logOut', error)
    }
}

