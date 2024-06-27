import { useState } from 'react';
import Swal from 'sweetalert2';

export function Alert(icon, title, text, timer, showConfirmButton) {

    if(title === 'Game Over'){
        return (
            Swal.fire({
                html: text,
                width: 300,
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

    } else if (title === 'Parabéns'){
        return (
            Swal.fire({
                html: text,
                width: 300,             
                background: '#fff',
                color: 'rgba(0,100,0,1)',
                position: 'center',
                icon: icon,
                title: title,
                text: text,
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
                text: text,
                showConfirmButton: showConfirmButton,
                timer: timer
            })
        )
    }

    
}