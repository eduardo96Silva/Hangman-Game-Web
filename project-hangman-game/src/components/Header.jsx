import style from '../css/Header.module.css'

import hangmanLogo from '/imgs/hangman-logo.png'

import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {
    const location = useLocation();

    return (
        <>
            <header id={style.header}>
                <div id={style.logo}>
                    <span>Hangman</span>
                    <br />
                    <span>Game <img src={hangmanLogo} alt="Hangman Logo" width={'50px'}/></span>
                </div>
                <div id={style.menu}>
                    <Link to='/' className={location.pathname == '/' ? style.active : ''}>Jogar</Link>
                    <Link to='/Scoreboard' className={location.pathname == '/Scoreboard' ? style.active : ''}>Scoreboard</Link>
                    <Link to='/Conta' className={location.pathname == '/Conta' ? style.active : ''}>Conta</Link>
                </div>
            </header>
        </>
    )
}
export default Header;
