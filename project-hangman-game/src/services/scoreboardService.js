import { db } from '../data/services/firebase-config';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore/lite';
import { Alert } from '../components/SweetAlert';

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

export const refreshScoreboard = async (nickname) => {
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