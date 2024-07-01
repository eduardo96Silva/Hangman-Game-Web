import { db } from '../data/services/firebase-config';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore/lite';
import { Alert } from '../../components/SweetAlert';

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

        await addDoc(collection(db, "scores"), {
            nickname: nickname,
            score: 0
        });

        createScore(0, user.uid)

        Alert(
            'success',
            'Cadastro realizado com sucesso !',
            'Enviamos um link de verificação para seu email <br/>Verifique sua caixa de entrada ou spam',
            '9000',
            true
        )
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


export const createScore = async (score, idUser) => {
    try {
        await addDoc(collection(db, "score"), {
            idUser: idUser,
            score: score
        });
        console.log('Score inicial do usuário criado com sucesso')
    } catch (error) {
        console.log('Houve um erro ao criar o score inicial do usuário: ', error)
        throw error;
    }
}

export const readRank = async (nickname) => {
    try {
        const scoresCollection = await collection(db, 'scores').orderBy("score", "desc").get();
        const player = nickname;
        let rank = 1;
        for (const doc of scoresCollection.docs) {
            const user = `${doc.get("nickname")}`;
            if (user === player) {
                return {
                    nickname: player,
                    rank: rank,
                    score: doc.get("score"),
                };
            }
            rank++;
        }
    } catch (error) {
        console.log('Erro ao ler o rank', error)
        throw error;
    }
}