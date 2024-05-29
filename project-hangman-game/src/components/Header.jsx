import styled from 'styled-components'
import '../css/App.css'

function Header(){



    const Header = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: auto;
        width: 100%;
    `;

    const Logo = styled.div`
        margin-top: 30px;
        margin-bottom: 10px;
        font-size: 2.8em;
        font-weight: 600;
        color: blue;
    `;

    const Menu = styled.span`
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        margin-top: 10px;
        margin-bottom: 30px;
        width: 30%;
        line-height: 50px;
        font-size: 1.1em;
        border: 1px solid #000;
        font-weight: 600;
        flex-wrap: wrap;
    `;


    return(
        <>
            <Header>
                <Logo> Hangman Game </Logo>
                <Menu>
                    <span>Jogar</span>
                    <span>Scoreboard</span>
                    <span>Conta</span>
                </Menu>
            </Header>
        </>
    )
}
export default Header;
