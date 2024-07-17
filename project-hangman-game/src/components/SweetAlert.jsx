import { useState } from 'react';
import Swal from 'sweetalert2';
import { deleteAccount } from '../services/userService';
import { logOut } from '../services/authService';
import { getAuth, sendEmailVerification, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export function AlertEmailPendingVerification(icon, title, text, showConfirmButton, showCancelButton, email, senha){
    return (
        Swal.fire({
            position: 'center',
            icon: icon,
            title: title,
            html: text,
            showConfirmButton: showConfirmButton,
            showCancelButton: showCancelButton,
            confirmButtonColor: "rgba(0, 100, 0)",
            cancelButtonColor: "rgba(50,50,50)",
            confirmButtonText: "Reenviar link",
            cancelButtonText: "Ok",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const auth = getAuth();
                    const userCredential = await signInWithEmailAndPassword(auth, email, senha);
                    const user = userCredential.user;
                    sendEmailVerification(user).then(()=>{
                        signOut(auth)
                    })
                    Swal.fire({
                        title: "",
                        html: "Link de verificação foi enviado para seu email <br/>Verifique a caixa de entrada ou spam",
                        icon: "success"
                    });
                } catch (error) {
                    console.log(error)
                }
            }
        })
    )
}

export function AlertDeleteAccount(icon, title, text, showConfirmButton, idUser) {

    return (
        Swal.fire({
            position: 'center',
            icon: icon,
            title: title,
            html: text,
            showConfirmButton: showConfirmButton,
            showCancelButton: true,
            confirmButtonColor: "rgba(0, 100, 0)",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, deletar conta!"
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    deleteAccount(idUser)
                    Swal.fire({
                        title: "",
                        text: "Sua conta foi deletada !",
                        icon: "success"
                    });
                    logOut(getAuth())
                } catch (error) {
                    console.log('Erro ao deletar conta '+ error);
                    Swal.fire({
                        title: "Ops",
                        html: "Houve um problema ao deletar sua conta <br/>Tente novamente mais tarde.",
                        icon: "error"
                    });
                }
            }
        })
    )
}

export function Alert(icon, title, text, timer, showConfirmButton) {

    if (title === 'Você Perdeu') {
        return (
            Swal.fire({
                html: text,
                background: '#fff',
                color: 'rgba(200,0,0,1)',
                position: 'center',
                icon: icon,
                title: title,
                showConfirmButton: showConfirmButton,
                timer: timer,
                timerProgressBar: true,
                backdrop: `
                    rgba(255,0,0,0.15)
                    url("/imgs/icon-gameover.gif")
                    left bottom
                    no-repeat
                `,
            })
        )

    } else if (title === 'Parabéns') {
        return (
            Swal.fire({
                html: text,
                background: '#fff',
                color: 'rgba(0,100,0,1)',
                position: 'center',
                icon: icon,
                title: title,
                showConfirmButton: showConfirmButton,
                confirmButtonColor: 'rgba(0,100,0,1)',
                timer: timer,
                timerProgressBar: true,
                backdrop: `
                    rgba(0,234,0,0.20)
                    url("/imgs/icon-victory.gif")
                    left bottom
                    no-repeat
                `,

            })
        )

    } else {

        return (
            Swal.fire({
                position: 'center',
                icon: icon,
                title: title,
                html: text,
                showConfirmButton: showConfirmButton,
                confirmButtonColor: 'rgba(0,100,0,1)',
                timer: timer
            })
        )
    }


}