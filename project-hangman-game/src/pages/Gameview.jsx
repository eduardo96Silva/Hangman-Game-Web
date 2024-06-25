
import style from '../css/GameView.module.css'
import '../css/index.css'
import stage1 from '/imgs/assets/stage-1.png'
import stage2 from '/imgs/assets/stage-2.png'
import stage3 from '/imgs/assets/stage-3.png'
import stage4 from '/imgs/assets/stage-4.png'
import stage5 from '/imgs/assets/stage-5.png'
import stage6 from '/imgs/assets/stage-6.png'
import stage7 from '/imgs/assets/stage-7.png'
import { useState } from 'react'
import { useEffect } from 'react'
import palavras from '../data/palavras'
import { Alert } from '../components/SweetAlert'

function Gameview() {

    let stages = [stage1, stage2, stage3, stage4, stage5, stage6, stage7]
    const [gameStarted, setGameStarted] = useState(false);
    const [buttonRestart, setButtonRestart] = useState(false);
    const [stageAtual, setStageAtual] = useState(0)
    const [palavraSelecionada, setPalavraSelecionada] = useState(null);
    const [qtdLetras, setQtdLetras] = useState(0);
    const [letrasCorretas, setLetrasCorretas] = useState([]);
    const [vidasRestantes, setVidasRestantes] = useState(6);

    // Iniciar o Jogo
    const startGame = () => {
        setGameStarted(true);
        const randomIndex = Math.floor(Math.random() * palavras.length); // Pegando uma palavra aleatoria da lista de palavras
        setPalavraSelecionada(palavras[randomIndex]); // guardando a palavra 
        setQtdLetras(palavras[randomIndex].palavra.length); // guardando a quantidade de letras que a palavra possui
        setLetrasCorretas([]);
        setVidasRestantes(6);
        setStageAtual(0);
        setButtonRestart(false)
        document.querySelector('.area_palavra').style.display = 'flex';
        document.querySelector('.area_keyboard').style.display = 'flex'; 
    };

    // Reiniciar o Jogo
    const restartGame = () => {
        setStageAtual(0);
        setPalavraSelecionada(null);
        setQtdLetras(0);
        setLetrasCorretas([]);
        setVidasRestantes(6);
        startGame()
        document.querySelectorAll('.area_keyboard button').forEach(element => {
            element.disabled = false; // Mostrando novamente todas as letras do teclado
            element.classList.remove('buttonDisabled'); // Mostrando novamente todas as letras do teclado
        });
    };



    // Testando a letra informada pelo usuário
    const testarLetra = (event) => {
        const letra = event.target.textContent.toLowerCase(); // Pegando a letra selecionada e transformando em minuscula
        if (palavraSelecionada.palavra.includes(letra)) { // Condição caso haja a letra na palavra
            setLetrasCorretas([...letrasCorretas, letra]); // atribuindo a letra na lista de letras corretas
            event.target.disabled = true;
            event.target.classList.add('buttonDisabled');

        } else { // Condição caso NÃO haja a letra na palavra
            setStageAtual(stageAtual + 1) // Aumentando o numero de erro
            setVidasRestantes(vidasRestantes - 1)  // Definindo as vidas restantes
            event.target.disabled = true;
            event.target.classList.add('buttonDisabled');
        }
    };


    // useEffect para monitorar a renderização das vidas restantes
    useEffect(() => {
        var qtdLetrasOcultas = 0;
        if(document.querySelector('.area_palavra')){
            const spans = document.querySelector('.area_palavra').children
            for (var i = 0; i < spans.length; i++){
                if (spans[i].innerHTML == '&nbsp;'){
                    qtdLetrasOcultas++;
                }
            }
            if(qtdLetrasOcultas == 0){
                document.querySelector('.area_palavra').style.display = 'none'; // Ocultando palavra
                document.querySelector('.area_keyboard').style.display = 'none'; // Ocultando o Keyboard
                setButtonRestart(true)
                Alert(false, 'Parabéns', 'Você acertou todas as Letras !', 7000, true)
            }
        }

        if (vidasRestantes == 0) { // Condição caso esgote todas as vidas
            document.querySelector('.area_palavra').style.display = 'none'; // Ocultando palavra
            document.querySelector('.area_keyboard').style.display = 'none'; // Ocultando o Keyboard
            setButtonRestart(true)
            Alert(false, 'Game Over', 'Você não completou a palavra.', 7000, true)
            
        } 
        
    }, [vidasRestantes, letrasCorretas]);


    // Criando a quantidade de spans de acordo com a quantidade de letras que a palavra possui
    // E após cada acerto, a letra fica visivel
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
                                <button className='btnStartGame' onClick={startGame}>Começar jogo</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div id={style.view}>
                                <section id={style.tableGame}>

                                    <div id={style.descript}>
                                        <span>Categoria: <b>{palavraSelecionada.categoria}</b></span>
                                        <span>Quantidade de Letras: <b>{palavraSelecionada.palavra.length}</b></span>
                                        <span>Vidas restantes: <b style={{ color: 'red', fontSize: '1.4em' }}>{vidasRestantes}</b></span>
                                    </div>

                                    <div id={style.areaForca}>
                                        <img id='forca' src={stages[stageAtual]} alt="forca" style={{ width: '180px', marginTop: '30px', marginBottom: '-30px', transition: 'all 0.8s' }} />
                                        <div id={style.palavra} className='area_palavra'>
                                            {spans}
                                        </div>
                                    </div>
                                    {
                                        buttonRestart ? (
                                            <button className='btnStartGame' onClick={restartGame} display={buttonRestart}>Jogar novamente</button>
                                        ) : (
                                            <></>
                                        )
                                    }
                                    
                                    <div id={style.keyboard} className='area_keyboard'>
                                        <div>
                                            <button onClick={testarLetra}>Q</button>
                                            <button onClick={testarLetra}>W</button>
                                            <button onClick={testarLetra}>E</button>
                                            <button onClick={testarLetra}>R</button>
                                            <button onClick={testarLetra}>T</button>
                                            <button onClick={testarLetra}>Y</button>
                                            <button onClick={testarLetra}>U</button>
                                            <button onClick={testarLetra}>I</button>
                                            <button onClick={testarLetra}>O</button>
                                            <button onClick={testarLetra}>P</button>
                                        </div>
                                        <div>
                                            <button onClick={testarLetra}>A</button>
                                            <button onClick={testarLetra}>S</button>
                                            <button onClick={testarLetra}>D</button>
                                            <button onClick={testarLetra}>F</button>
                                            <button onClick={testarLetra}>G</button>
                                            <button onClick={testarLetra}>H</button>
                                            <button onClick={testarLetra}>J</button>
                                            <button onClick={testarLetra}>K</button>
                                            <button onClick={testarLetra}>L</button>
                                        </div>
                                        <div>
                                            <button onClick={testarLetra}>Z</button>
                                            <button onClick={testarLetra}>X</button>
                                            <button onClick={testarLetra}>C</button>
                                            <button onClick={testarLetra}>V</button>
                                            <button onClick={testarLetra}>B</button>
                                            <button onClick={testarLetra}>N</button>
                                            <button onClick={testarLetra}>M</button>
                                            <button onClick={testarLetra}>Ç</button>
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
