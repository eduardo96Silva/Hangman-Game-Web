
import '../css/index.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { logOut } from '../services/authService';
import Button from '@mui/material/Button';
import Loading from '../components/Loading';
import { useAuth } from '../contexts/authContext';

function Perfil() {
    const { currentUser } = useAuth();

    
    const navigate = useNavigate();


    const sairDaConta = () => {
        logOut(getAuth())
        navigate('/Login')
    }


    return (
        <>  
            {currentUser? (

                <div>
                    <h1>Perfil</h1>
                    <p>Email: {currentUser.email}</p>
                    <Button onClick={sairDaConta} variant="contained" color='success'>Sair da conta</Button>
                </div>

            ) : (           
                <Loading/>
            )}
        </>
    );
}

export default Perfil;