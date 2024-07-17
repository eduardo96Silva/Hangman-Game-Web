import { db } from '../services/firebaseConfig';
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc, where } from 'firebase/firestore/lite';

export const getScores = async () => {
    try {
        const scoresCollection = await collection(db, 'usuarios')
        const q = query(scoresCollection, orderBy("score", "desc"), where("score", ">", 0))
        const listDocs = await getDocs(q)
        // console.log(listDocs.docs[0].data().nickname)
        return listDocs;

    } catch (error) {
        console.log('Não foi possível trazer os scores', error);
    }
}

export const updateScore = async (id, newScore) => {
    try {
        const userRef = doc(db, "usuarios", id);
        await updateDoc(userRef, {
            score: newScore
        });

        localStorage.setItem('score', newScore)
        console.log('Score atualizado com sucesso');
    } catch (error) {
        console.error('Erro ao atualizar o score:', error);
    }
}