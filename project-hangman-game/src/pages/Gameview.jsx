// Styles
import style from '../css/GameView.module.css'
import '../css/index.css'

// IMGS
import stage1 from '/imgs/assets/stage-1.png'
import stage2 from '/imgs/assets/stage-2.png'
import stage3 from '/imgs/assets/stage-3.png'
import stage4 from '/imgs/assets/stage-4.png'
import stage5 from '/imgs/assets/stage-5.png'
import stage6 from '/imgs/assets/stage-6.png'
import stage7 from '/imgs/assets/stage-7.png'

// Hooks
import { useState } from 'react'


// Data
import palavras from '../data/palavras'
import { useEffect } from 'react'

function Gameview() {

    let stages = [stage1, stage2, stage3, stage4, stage5, stage6, stage7]
    const [gameStarted, setGameStarted] = useState(false);
    const [stageAtual, setStageAtual] = useState(0)
    const [palavraSelecionada, setPalavraSelecionada] = useState(null);
    const [qtdLetras, setQtdLetras] = useState(0);
    const [letrasCorretas, setLetrasCorretas] = useState([]);
    const [vidasRestantes, setVidasRestantes] = useState(6);

    const startGame = () => {
        setGameStarted(true);
        const randomIndex = Math.floor(Math.random() * palavras.length);
        setPalavraSelecionada(palavras[randomIndex]);
        setQtdLetras(palavras[randomIndex].palavra.length);
    };


    const testarLetra = (event) => {
        console.log(event.target.style.backgroundColor)
        const letra = event.target.textContent.toLowerCase();
        if (palavraSelecionada.palavra.includes(letra)) {
            setLetrasCorretas([...letrasCorretas, letra]);
            event.target.style.display= 'none';

        } else {
            setStageAtual(stageAtual+1)
            setVidasRestantes(vidasRestantes-1)
            event.target.style.display= 'none';

        }
    };

    useEffect(() => {
        if(vidasRestantes == 0){
            document.querySelector('.area_palavra').style.display = 'none';
            document.querySelector('.area_keyboard').style.display = 'none';
        }
    }, [vidasRestantes]);

    const spans = Array.from({ length: qtdLetras }).map((_, index) => {
        const letra = palavraSelecionada.palavra[index];
        return <span key={index}>{letrasCorretas.includes(letra) ? letra : <>&nbsp;</>}</span>;
    });

    return (
        <>
            <div id={style.section_gameView}>
                {
                    !gameStarted ? (
                        <>
                            <div id={style.lobby}>
                                <button onClick={startGame}>Começar jogo</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div id={style.view}>
                                <section id={style.tableGame}>

                                    <div id={style.descript}>
                                        <span>Categoria: <b>{palavraSelecionada.categoria}</b></span>   
                                        <span>Quantidade de Letras: <b>{palavraSelecionada.palavra.length}</b></span>
                                        <span>Vidas restantes: <b style={{color:'red', fontSize: '1.4em'}}>{vidasRestantes}</b></span>
                                    </div>

                                    <div id={style.areaForca}>
                                        <img id='forca' src={stages[stageAtual]} alt="forca" style={{ width: '180px', marginTop: '30px', marginBottom: '-30px', transition: 'all 0.8s'}} />
                                        <div id={style.palavra} className='area_palavra'>
                                            {spans}
                                        </div>
                                    </div>

                                    <div id={style.keyboard} className='area_keyboard'>
                                        <div>
                                            <span onClick={testarLetra}>Q</span>
                                            <span onClick={testarLetra}>W</span>
                                            <span onClick={testarLetra}>E</span>
                                            <span onClick={testarLetra}>R</span>
                                            <span onClick={testarLetra}>T</span>
                                            <span onClick={testarLetra}>Y</span>
                                            <span onClick={testarLetra}>U</span>
                                            <span onClick={testarLetra}>I</span>
                                            <span onClick={testarLetra}>O</span>
                                            <span onClick={testarLetra}>P</span>
                                        </div>
                                        <div>
                                            <span onClick={testarLetra}>A</span>
                                            <span onClick={testarLetra}>S</span>
                                            <span onClick={testarLetra}>D</span>
                                            <span onClick={testarLetra}>F</span>
                                            <span onClick={testarLetra}>G</span>
                                            <span onClick={testarLetra}>H</span>
                                            <span onClick={testarLetra}>J</span>
                                            <span onClick={testarLetra}>K</span>
                                            <span onClick={testarLetra}>L</span>
                                        </div>
                                        <div>
                                            <span onClick={testarLetra}>Z</span>
                                            <span onClick={testarLetra}>X</span>
                                            <span onClick={testarLetra}>C</span>
                                            <span onClick={testarLetra}>V</span>
                                            <span onClick={testarLetra}>B</span>
                                            <span onClick={testarLetra}>N</span>
                                            <span onClick={testarLetra}>M</span>
                                            <span onClick={testarLetra}>Ç</span>
                                        </div>
                                    </div>
                                </section>
                            </div>

                        </>
                    )
                }
            </div>
        </>
    )
}
            export default Gameview;
