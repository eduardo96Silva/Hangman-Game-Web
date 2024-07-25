import React, { useState } from 'react';
import style from '../css/Header.module.css';
import hangmanLogo from '/imgs/hangman-logo.png';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import Avatar from '@mui/material/Avatar';
import avatarList from '../avatares.json';
import { bubble as Menu } from 'react-burger-menu';

function Header() {
    const { currentUser } = useAuth();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleStateChange = (state) => {
        setMenuOpen(state.isOpen);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

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
                        className={location.pathname === '/' ? style.active : ''}
                        onClick={closeMenu}>
                        Jogar
                    </Link>
                    <Link
                        to={'/Scoreboard'}
                        className={location.pathname === '/Scoreboard' ? style.active : ''}
                        onClick={closeMenu}>
                        Scoreboard
                    </Link>
                    <Link
                        to={'/Sobre'}
                        className={location.pathname === '/Sobre' ? style.active : ''}
                        onClick={closeMenu}>
                        Sobre
                    </Link>
                </div>

                <div id={style.accountOption}>
                    {
                        currentUser ? (
                            <Link
                                to='/Perfil'
                                className={location.pathname === '/Perfil' ? style.active : ''}
                                onClick={closeMenu}>
                                <span id={style.navItemPerfil}>
                                    <Avatar alt="Avatar" src={`/imgs/avatar/${avatarList[localStorage.getItem('idAvatar')]}`} />
                                    &nbsp;
                                    {localStorage.getItem('nickname')}
                                </span>
                            </Link>
                        ) : (
                            <Link
                                to='/Login'
                                className={location.pathname === '/Login' ? style.active : ''}
                                onClick={closeMenu}>
                                Conta
                            </Link>
                        )
                    }
                </div>
            </header>

            <Menu
                id={style.navMobile}
                isOpen={menuOpen}
                onStateChange={(state) => handleStateChange(state)}>
                <div id={style.logo}>
                    <span>Hangman</span>
                    <br />
                    <span>Game <img src={hangmanLogo} alt="Hangman Logo" width={'35px'} /></span>
                </div>
                <div id={style.navbar}>
                    <Link
                        to={'/'}
                        className={location.pathname === '/' ? style.active : ''}
                        onClick={closeMenu}>
                        Jogar
                    </Link>
                    <Link
                        to={'/Scoreboard'}
                        className={location.pathname === '/Scoreboard' ? style.active : ''}
                        onClick={closeMenu}>
                        Scoreboard
                    </Link>
                    <Link
                        to={'/Sobre'}
                        className={location.pathname === '/Sobre' ? style.active : ''}
                        onClick={closeMenu}>
                        Sobre
                    </Link>
                </div>

                <div id={style.accountOption}>
                    {
                        currentUser ? (
                            <Link
                                to='/Perfil'
                                className={location.pathname === '/Perfil' ? style.active : ''}
                                onClick={closeMenu}>
                                <span id={style.navItemPerfil}>
                                    <Avatar alt="Avatar" src={`/imgs/avatar/${avatarList[localStorage.getItem('idAvatar')]}`} />
                                    &nbsp;
                                    {localStorage.getItem('nickname')}
                                </span>
                            </Link>
                        ) : (
                            <Link
                                to='/Login'
                                className={location.pathname === '/Login' ? style.active : ''}
                                onClick={closeMenu}>
                                Conta
                            </Link>
                        )
                    }
                </div>
            </Menu>
        </>
    );
}

export default Header;
