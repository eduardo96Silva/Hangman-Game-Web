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
        if (save) {
            response.forEach((doc) => {
                localStorage.setItem('idAvatar', doc.data().idAvatar)
                localStorage.setItem('nickname', doc.data().nickname)
                localStorage.setItem('email', doc.data().email)
                localStorage.setItem('idDoc', doc.id)
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

export const updateNicknameById = async (id, newNickname) => {
    try {
        const userRef = doc(db, "usuarios", id);
        await updateDoc(userRef, {
            nickname: newNickname
        });

        localStorage.setItem('nickname', newNickname)
        console.log('Nickname atualizado com sucesso');
    } catch (error) {
        console.error('Erro ao atualizar o nome:', error);
    }
};


export const updateAvatarById = async (idDoc, newIdAvatar) => {
    try {
        localStorage.setItem('idAvatar', newIdAvatar)
        const userRef = doc(db, "usuarios", idDoc);
        await updateDoc(userRef, {
            idAvatar: newIdAvatar
        });
        console.log('Avatar atualizado com sucesso');
    } catch (error) {
        console.error('Erro ao atualizar o avatar:', error);
    }
};

export const deleteUser = async (idUser) => {
    try {
        await deleteDoc(doc(db, "usuarios", idUser));

    } catch (error) {
        console.error('Erro ao deletar usuario ', error);
        throw error;
    }
}
