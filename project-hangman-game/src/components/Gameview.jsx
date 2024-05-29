import styled from 'styled-components'
import '../css/App.css'

import { bubble as Menu } from 'react-burger-menu'

function Gameview(){


    const Section = styled.section`
        height: 380px;
        display: flex;
        background-color: #f88;
        border: 2px solid #000;
    `;

    return(
        <>
            <Section>
                <Menu>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/">About</a>
                    <a id="contact" className="menu-item" href="/">Contact</a>
                </Menu>
            </Section>
        </>
    )
}
export default Gameview;
