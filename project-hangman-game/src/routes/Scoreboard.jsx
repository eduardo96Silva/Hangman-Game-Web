import '../css/index.css'
import style from '../css/Scoreboard.module.css'
import imgVerifyIcon from '/imgs/img-account-verify.png'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

function Scoreboard() {
    const { currentUser } = useAuth();

    return (
        <>
            {currentUser ? (
                <div id='sectionPage'>
                    <div id={style.card} className='painel'>
                        <h3>RANK</h3>
                    </div>
                </div>
            ) : (
                <div id='sectionPage'>
                    <div id={style.card} className='painel'>
                        <img src={imgVerifyIcon} width={200} />
                        <span>Ops...</span>
                        <span>Parece que você precisa de uma conta para ter acesso a tabela</span>
                        <br />
                        <Link to='/Cadastro'>
                            <Button variant="contained">Cadastrar-se</Button>
                        </Link>
                    </div>
                </div>
            )}

        </>
    )
}
export default Scoreboard;
