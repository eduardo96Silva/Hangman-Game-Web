import style from '../css/Header.module.css'

import hangmanLogo from '/imgs/hangman-logo.png'

import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import Avatar from '@mui/material/Avatar';
import avatarList from '../avatares.json'

function Header() {
    const { currentUser } = useAuth();
    const location = useLocation();

    return (
        <>
            <header id={style.header}>
                <div id={style.logo}>
                    <span>Hangman</span>
                    <br />
                    <span>Game <img src={hangmanLogo} alt="Hangman Logo" width={'35px'} /></span>
                </div>
                <div id={style.navbar}>
                    <Link 
                        to={'/'} 
                        className={location.pathname == '/' ? style.active : ''}>
                        Jogar
                    </Link>
                    <Link
                        to={'/Scoreboard'}
                        className={location.pathname == '/Scoreboard' ? style.active : ''}>
                        Scoreboard
                    </Link>
                    <Link 
                        to={'/Sobre'} 
                        className={location.pathname == '/Sobre' ? style.active : ''}>
                        Sobre
                    </Link>
                </div>

                <div id={style.accountOption}>
                    {
                        currentUser ? (
                            <Link 
                                to='/Perfil' 
                                className={location.pathname == '/Perfil' ? style.active : ''}>
                                <span id={style.navItemPerfil}>
                                    <Avatar alt="Avatar" src={`/imgs/avatar/${avatarList[localStorage.getItem('idAvatar')]}`}/>
                                    &nbsp; 
                                    {localStorage.getItem('nickname')}
                                </span>
                            </Link>
                        ) : (
                            <Link 
                                to='/Login' 
                                className={location.pathname == '/Login' ? style.active : ''}>
                                Conta
                            </Link>
                        )
                    }

                </div>

            </header>
        </>
    )
}
export default Header;
