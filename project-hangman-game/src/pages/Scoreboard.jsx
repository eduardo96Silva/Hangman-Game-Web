import '../css/index.css'
import style from '../css/Scoreboard.module.css'
import imgVerifyIcon from '/imgs/img-account-verify.png'
import Button from '@mui/material/Button';
function Scoreboard() {

    return (
        <>  
            <div id='sectionPage'>
                <div id={style.card} className='painel'>
                    <img src={imgVerifyIcon} width={200}/>
                    <span>Ops...</span>
                    <span>Parece que você precisa de uma conta para ter acesso a tabela</span>
                    <br />
                    <Button variant="contained">Cadastrar-se</Button>
                </div>
            </div>
        </>
    )
}
export default Scoreboard;
