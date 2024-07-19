import style from '../css/Sobre.module.css'
import '../css/index.css'
import figure1 from '/imgs/figure-01.png'
import figure2 from '/imgs/figure-02.png'
import figure3 from '/imgs/figure-03.png'
import figure4 from '/imgs/figure-04.png'
function Sobre() {

    return (
        <>
            <div id='sectionPage'>
                <div id={style.card} className='painel'>
                    <section id={style.section01}>
                        <div><img src={figure1} alt="" width={'100px'}/></div>
                        <span>
                            <h2 style={{color : 'rgb(124, 75, 75)'}} >Como o jogo da forca funciona ?</h2>
                            <p>
                                O jogo da forca (Hangman Game) é um jogo em que o jogador tem que acertar toda as letras da palavra oculta, tendo como dica a quantidade de letras e o tema da palavra.<br/>
                                A cada letra errada, é desenhado uma parte do corpo do enforcado.<br/>
                                O jogo termina ou com o acerto de todas as letras da palavra ou com o término do preenchimento das partes corpóreas do enforcado.
                            </p>
                        </span>
                    </section>
                    <br />
                    <br />

                    <section id={style.section02}>
                        <span>
                            <h2 style={{color : 'rgb(72, 86, 203)'}}>Pontuação</h2>
                            <p>
                                Você consegue pontuar através de cada vitória, acumulando (Sequências de vitórias), após perder o jogo ou sair da página, suas sequências de vitórias serão zeradas. <br />
                                Mas não se preocupe, pois a pontuação mais alta que você fizer, ficará salva !
                            </p>
                        </span>
                        <div><img src={figure2} alt="" width={'110px'}/></div>
                    </section>

                    <br />
                    <br />

                    <section id={style.section03}>
                        <div><img src={figure3} alt="" width={'110px'}/></div>
                        <span>
                            <h2 style={{color : 'rgba(0,140,200,1)'}}>Scoreboard (Tabela de pontuação)</h2>
                            <p>
                                Para ter acesso a tabela, é necessário ter uma conta cadastrada, pois
                                a tabela de pontuações é onde você disputa seus pontos (Sequências de vitórias) com outros jogadores em tempo real.<br />
                                Você apenas começa a disputar na tabela após realizar sua primeira pontuação.
                            </p>
                        </span>
                        <div><img src={figure4} alt="" width={'110px'}/></div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Sobre