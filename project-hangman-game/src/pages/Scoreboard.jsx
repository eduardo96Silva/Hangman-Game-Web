import '../css/index.css'
import style from '../css/Scoreboard.module.css'
import imgVerifyIcon from '/imgs/img-account-verify.png'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import Table from '../components/Table';
import { useState } from 'react';
import { getScores } from '../services/scoreboardService';
import { useEffect } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Alert } from '../components/SweetAlert'

function Scoreboard() {
    const { currentUser } = useAuth();
    const [listData, setListData] = useState([])
    const [refresh, setRefresh] = useState(false)


    useEffect(() => {
        extractDataScore()
    }, [refresh])


    const extractDataScore = async () => {
        if(currentUser){
            const data = await getScores()
            let list = []
            let rank = 1
            for (const doc of data.docs) {
                list.push({
                    rank: rank,
                    name: doc.data().nickname,
                    score: doc.data().score,
                    idAvatar: doc.data().idAvatar,
                })
                rank++
            }
            setListData(list)
            console.log('RFSH:Scoreboard');
        }
    }

    const refreshTable = () => {
        setRefresh((state) => !state)
        Alert(
            'success',
            '', 'Tabela atualizada', 1000, ''
        )
    }


    return (
        <>
            {currentUser ? (
                <div id='sectionPage'>
                    <div id={style.card} className='painel'>
                        <div id={style.area_RefreshButton}>
                            <Button variant='contained' onClick={refreshTable}>
                                <RefreshIcon color='#fff' />&nbsp;Atualizar tabela
                            </Button>
                        </div>
                        <Table data={listData} />
                    </div>
                </div>
            ) : (
                <div id='sectionPage'>
                    <div id={style.card} className='painel'>
                        <img src={imgVerifyIcon} width={200} />
                        <span>Ops...</span>
                        <span>Parece que você precisa de uma conta para ter acesso a tabela</span>
                        <br />
                        <Link to='/Cadastro'>
                            <Button variant="contained">Cadastrar-se</Button>
                        </Link>
                    </div>
                </div>
            )}

        </>
    )
}
export default Scoreboard;
