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

function Scoreboard() {
    const { currentUser } = useAuth();
    const [listData, setListData] = useState([])

    useEffect(()=>{
        extractDataScore()
        console.log('Refresh Scoreboard');
    },[])

    const extractDataScore = async () =>{
        const data = await getScores()
        let list = []
        let rank = 1
        for (const doc of data.docs){
            list.push({
                rank: rank,
                name: doc.data().nickname,
                score: doc.data().score,
                idAvatar: doc.data().idAvatar,
            })
            rank++
        }
        setListData(list)
    }


    // const data = [
    //     { idAvatar: 1, rank: 1, name: 'Alice', score: 101 },
    //     { idAvatar: 6, rank: 2, name: 'Bob', score: 92 },
    //     { idAvatar: 10, rank: 3, name: 'Charlie', score: 78 },
    //     { idAvatar: 15, rank: 4, name: 'Eduardo001', score: 56 },
    //     { idAvatar: 5, rank: 5, name: 'Eve', score: 55 },
    //     { idAvatar: 1, rank: 6, name: 'Frank', score: 31 },
    //     { idAvatar: 3, rank: 7, name: 'Grace', score: 20 },
    //     { idAvatar: 9, rank: 8, name: 'Hank', score: 17 },
    //     { idAvatar: 16, rank: 9, name: 'Elaine', score: 17 },
    //     { idAvatar: 14, rank: 10, name: 'Jack', score: 11 },
    //     { idAvatar: 19, rank: 11, name: 'Kim', score: 9 },
    //     { idAvatar: 17, rank: 12, name: 'Hunter', score: 5 },
    //     { idAvatar: 17, rank: 13, name: 'Cathy', score: 3 },
    // ];


    return (
        <>
            {currentUser ? (
                <div id='sectionPage'>
                    <div id={style.card} className='painel'>
                        <h3>Tabela de pontuação</h3>
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
