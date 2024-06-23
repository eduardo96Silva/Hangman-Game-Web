import style from '../css/GameView.module.css'
import stage1 from '/imgs/assets/Stage 1.png'
import stage2 from '/imgs/assets/Stage 2.png'
import stage3 from '/imgs/assets/Stage 3.png'
import stage4 from '/imgs/assets/Stage 4.png'
import stage5 from '/imgs/assets/Stage 5.png'
import stage6 from '/imgs/assets/Stage 6.png'
import stage7 from '/imgs/assets/Stage 7.png'
import '../css/index.css'

function Gameview() {

    return (
        <>
            <div id={style.section_gameView}>
                <div id={style.view}>
                    {/* <button>Iniciar</button> */}

                    <section id={style.tableGame}>

                        <div id={style.descript}>
                            <span>Categoria: { }</span>
                            <span>Quantidade de Letras: { }</span>
                            <span>Vidas restantes: { }</span>
                        </div>

                        <div>
                            <img src={stage1} alt="" style={{width: '130px', marginTop: '30px'}}/>
                            <div>
                                <span></span>
                            </div>
                        </div>

                        <div id={style.keyboard}>
                            <div>
                                <span>Q</span>
                                <span>W</span>
                                <span>E</span>
                                <span>R</span>
                                <span>T</span>
                                <span>Y</span>
                                <span>U</span>
                                <span>I</span>
                                <span>O</span>
                                <span>P</span>
                            </div>
                            <div>
                                <span>A</span>
                                <span>S</span>
                                <span>D</span>
                                <span>F</span>
                                <span>G</span>
                                <span>H</span>
                                <span>J</span>
                                <span>K</span>
                                <span>L</span>
                            </div>
                            <div>
                                <span>Z</span>
                                <span>X</span>
                                <span>C</span>
                                <span>V</span>
                                <span>B</span>
                                <span>N</span>
                                <span>M</span>
                                <span>Ç</span>
                            </div>
                        </div>


                    </section>
                </div>
            </div>
        </>
    )
}
export default Gameview;
