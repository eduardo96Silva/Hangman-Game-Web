import { db } from '../data/services/firebase-config';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore/lite';

export const getUsers = async () => {
    try{
        const usuariosCollection = collection(db, 'usuarios');
        const usuariosDocs = await getDocs(usuariosCollection);
        const response = usuariosDocs.docs.map(doc => doc.data());
        return response;

    } catch(error) {
        console.error('Erro ao buscar dados ', error);
        throw error;
    }
}

export const postUser = async (nickname, email, senha) => {
    try{
        const docRef = await addDoc(collection(db, "usuarios"),{
            nickname: nickname,
            email: email,
            senha: senha
        });
        console.log("Usuário registrado com ID: ", docRef.id);

    } catch(error) {
        console.error('Erro ao registrar dados ', error);
        throw error;
    }
}

export const updateNickname = async (idUser, nickname) => {
    try{
        const docRef  = doc(db, "usuarios", idUser);
        await updateDoc(docRef, {
            nickname: nickname
        });

    } catch(error) {
        console.error('Erro ao atualizar nickname ', error);
        throw error;
    }
}

export const updateAvatar = async (idUser, idAvatar) => {
    try{
        const docRef  = doc(db, "usuarios", idUser);
        await updateDoc(docRef, {
            idAvatar: idAvatar
        });

    } catch(error) {
        console.error('Erro ao atualizar avatar ', error);
        throw error;
    }
}

export const deleteUser = async (idUser) => {
    try{
        await deleteDoc(doc(db, "usuarios", idUser));

    } catch(error) {
        console.error('Erro ao deletar usuario ', error);
        throw error;
    }
}
