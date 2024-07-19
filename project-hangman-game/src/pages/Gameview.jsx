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
import Button from '@mui/material/Button'
import { useAuth } from '../contexts/authContext';
import fireIcon from '/imgs/icon-sequence.gif'
import { updateScore } from '../services/scoreboardService'

function Gameview() {
    const {currentUser} = useAuth()
    const [score, setScore] = useState(parseInt(localStorage.getItem('score')))
    const [pontuacaoAtual, setPontuacaoAtual] = useState(0)

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

        // Alterando estado de alguns elementos para hide e show
        setButtonRestart(false)
        if (document.querySelector('.area_palavra') && document.querySelector('.area_keyboard')){
            document.querySelector('.area_palavra').style.display = 'flex';
            document.querySelector('.area_keyboard').style.display = 'flex'
        }
    };

    // Reiniciar o Jogo
    const restartGame = () => {
        // Resetando o estado dos elementos para o original
        setStageAtual(0);
        setPalavraSelecionada(null);
        setQtdLetras(0);
        setLetrasCorretas([]);
        setVidasRestantes(6);
        startGame();
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
            if(qtdLetrasOcultas == 0){ // Condição caso o usuário Ganhar
                document.querySelector('.area_keyboard').style.display = 'none'; // Ocultando o Keyboard
                setButtonRestart(true)
                if(currentUser){
                    Alert(
                        false, 
                        'Parabéns', 
                        'Você acertou todas as Letras da palavra: <b>'+palavraSelecionada.palavra.toUpperCase()+'<b/><br/>E ganhou +1 ponto !', 
                        '', 
                        true
                    )       
                    setPontuacaoAtual(pontuacaoAtual+1)
                } else {
                    Alert(
                        false, 
                        'Parabéns', 
                        'Você acertou todas as Letras da palavra: <b>'+palavraSelecionada.palavra.toUpperCase()+'<b/>', 
                        '', 
                        true
                    )   
                }
            }
        }

        if (vidasRestantes == 0) { // Condição caso esgote todas as vidas
            document.querySelector('.area_palavra').style.display = 'none'; // Ocultando palavra
            document.querySelector('.area_keyboard').style.display = 'none'; // Ocultando o Keyboard
            setButtonRestart(true)
            if(currentUser){
                {pontuacaoAtual > 0 ? 
                    Alert(
                        false, 
                        'Você Perdeu', 
                        'Você não acertou todas as Letras da palavra: <b>'+palavraSelecionada.palavra.toUpperCase()+'<b/><br/>Seus pontos de sequência foram zerados !', 
                        '', 
                        true
                    )    
                    :
                    Alert(
                        false, 
                        'Você Perdeu', 
                        'Você não acertou todas as Letras da palavra: <b>'+palavraSelecionada.palavra.toUpperCase()+'<b/>', 
                        '', 
                        true
                    );
                }
                setPontuacaoAtual(0)
            } else {
                Alert(
                    false, 
                    'Você Perdeu', 
                    'Você não acertou todas as Letras da palavra: <b>'+palavraSelecionada.palavra.toUpperCase()+'<b/>', 
                    '', 
                    true
                )    
            }
        } 
        
    }, [vidasRestantes, letrasCorretas]);

    useEffect(()=>{
        if(pontuacaoAtual > score){
            setScore(pontuacaoAtual)
            localStorage.setItem('score', pontuacaoAtual)
            Alert(
                '', 
                'Parabéns', 
                'Você acaba de atingir um novo record em sequência de vitórias ! <br/>Seu novo record: '+localStorage.getItem('score'),
                '',
                true
            )       
            updateScore(localStorage.getItem('idDoc'), pontuacaoAtual)
        }
        
    }, [pontuacaoAtual])

    // Criando a quantidade de spans de acordo com a quantidade de letras que a palavra possui
    // E após cada acerto, a letra fica visivel
    const spans = Array.from({ length: qtdLetras }).map((_, index) => {
        const letra = palavraSelecionada.palavra[index];
        return <span key={index}>{letrasCorretas.includes(letra) ? letra : <>&nbsp;</>}</span>;
    });


    return (
        <>
            <div id='sectionPage'>
                {
                    !gameStarted ? (
                        <>
                            <div id={style.lobby} className="painel">
                                <Button variant="contained" onClick={startGame}>Começar Jogo</Button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div id={style.view} className="painel">
                                <section id={style.tableGame}>

                                    <div id={style.descript}>
                                        <span>Tema: <b>{palavraSelecionada.categoria.toUpperCase()}</b></span>
                                        <span>Vidas restantes: <b style={{ color: 'red', fontSize: '1.4em' }}>{vidasRestantes}</b></span>
                                        {
                                            currentUser ? (<>
                                                <span>
                                                    Seu record:&nbsp;
                                                    <b>{score}</b>
                                                </span>
                                                <span>
                                                    Pontuação atual:&nbsp;
                                                    {pontuacaoAtual === 0 ? ('') : (<img src={fireIcon} width={'20px'}/>)}                                                   
                                                    <b>{pontuacaoAtual}</b>
                                                </span>
                                            </>) : ('')
                                        }
                                    </div>

                                    <div id={style.areaForca}>
                                        <img id='forca' src={stages[stageAtual]} alt="forca" style={{ width: '180px', marginTop: '30px', marginBottom: '-30px', transition: 'all 0.8s' }} />
                                        <div id={style.palavra} className='area_palavra'>
                                            {spans}
                                        </div>
                                    </div>
                                    {
                                        buttonRestart ? (
                                            <Button 
                                                variant="contained" 
                                                onClick={restartGame} 
                                                style={{marginTop: '30px'}}
                                            >
                                                Jogar novamente
                                            </Button>
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
