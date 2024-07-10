import { db } from '../services/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc, query, where } from 'firebase/firestore/lite';
import { createScore } from './scoreboardService';


export const getUsers = async () => {
    try {
        const usuariosCollection = collection(db, 'usuarios');
        const usuariosDocs = await getDocs(usuariosCollection);
        const response = usuariosDocs.docs.map(doc => doc.data());
        return response;

    } catch (error) {
        console.error('Erro ao buscar dados ', error);
        throw error;
    }
}


export const getUserByEmail = async (email, save) => {
    try {
        const usuariosCollection = collection(db, "usuarios");
        const q = query(usuariosCollection, where("email", "==", email));
        const response = await getDocs(q);
        if(save){
            response.forEach((doc) => {
                localStorage.setItem('idAvatar', doc.data().idAvatar)
                localStorage.setItem('nickname', doc.data().nickname)
                localStorage.setItem('email', doc.data().email)
            })
        }
        return response

    } catch (error) {
        console.log('Erro ao buscar usuario por email', error)
    }
}


export const postUser = async (idAvatar, nickname, email, senha) => {
    try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;

        await sendEmailVerification(user)

        const docRef = await addDoc(collection(db, "usuarios"), {
            idAvatar: idAvatar,
            nickname: nickname,
            email: email,
            senha: senha
        });

        createScore(0, nickname)

        console.log("Documento de usuário registrado com ID: ", docRef.id);
        console.log(user);

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Erro ao registrar dados: ', errorCode, errorMessage);
        throw error;
    }
};


export const updateNickname = async (idUser, nickname) => {
    try {
        const docRef = doc(db, "usuarios", idUser);
        await updateDoc(docRef, {
            nickname: nickname
        });

    } catch (error) {
        console.error('Erro ao atualizar nickname ', error);
        throw error;
    }
}

export const updateAvatar = async (idUser, idAvatar) => {
    try {
        const docRef = doc(db, "usuarios", idUser);
        await updateDoc(docRef, {
            idAvatar: idAvatar
        });

    } catch (error) {
        console.error('Erro ao atualizar avatar ', error);
        throw error;
    }
}

export const deleteUser = async (idUser) => {
    try {
        await deleteDoc(doc(db, "usuarios", idUser));

    } catch (error) {
        console.error('Erro ao deletar usuario ', error);
        throw error;
    }
}
