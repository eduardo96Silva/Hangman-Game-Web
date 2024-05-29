import styled from 'styled-components'
import '../css/App.css'

function Footer(){


    const Section = styled.section`
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 20px;
        padding-bottom: 20px;
    `;

    return(
        <>
            <Section>
                <a href="https://github.com/eduardo96Silva/Hangman-Game-Web">@Github/HangmanGame by Eduardo Silva</a>
            </Section>
        </>
    )
}
export default Footer;
