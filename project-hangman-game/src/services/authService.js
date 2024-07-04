import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Alert } from '../../components/SweetAlert';


export const logIn = async (email, senha) => {
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;

        if (!user.emailVerified) {
            Alert(
                'warning',
                'Verificação pendente',
                'Por favor, verifique seu email antes de fazer login.',
                '9000',
                true
            );
            await signOut(auth);
            return false;
        }

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const logOut = async (auth) => {
    try{
        signOut(auth)
        console.log('Usuário desconectado com sucesso')

    } catch (error){
        console.log(error)
        console.log('Não foi possível fazer logOut', error)
    }
}