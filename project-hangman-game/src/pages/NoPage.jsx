import style from '../css/NoPage.module.css'
import img404 from '/imgs/404-img.png'
import '../css/index.css'

function NoPage() {

    return (
        <>
            <div id={style.contentPage}>
                <img src={img404} alt="Image ilustration 404" />
                <h3>
                    Ops... <br />
                    Essa página parece que não existe.
                </h3>
            </div>
        </>
    )
}

export default NoPage;