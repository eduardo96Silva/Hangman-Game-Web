
import '../css/index.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { logOut } from '../services/authService';
import Button from '@mui/material/Button';
import style from '../css/Perfil.module.css'
import { TextField } from '@mui/material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';

import avatarList from '../avatares.json'
import { getUsers, updateAvatarById, updateNicknameById } from '../services/userService';
import { Alert, AlertDeleteAccount } from '../components/SweetAlert';

function Perfil() {

    const navigate = useNavigate();


    const idAvatar = localStorage.getItem('idAvatar')
    const nickname = localStorage.getItem('nickname')
    const email = localStorage.getItem('email')
    const idUser = localStorage.getItem('idDoc')

    const [inputName, setInputName] = useState(nickname)

    const [hasSelectAvatar, setHasSelectAvatar] = useState(false)
    const [avatarSelecionado, setAvatarSelecionado] = useState(avatarList[idAvatar])

    const [inputDisable, setInputDisable] = useState(true)
    const [statusModeEdit, setStatusModeEdit] = useState("Editar Nome")

    const openSelectionAvatar = () => {
        setHasSelectAvatar(true)
    }
    const selectAvatar = async (event) => {
        const indexAvatar = parseInt(event.target.id)
        setAvatarSelecionado(avatarList[indexAvatar])
        setHasSelectAvatar(false)
        await updateAvatarById(idUser, indexAvatar)
        location.reload()
    }

    const editNome = async () => {
        setInputDisable((status) => !status);
        statusModeEdit === "Editar Nome" ? setStatusModeEdit("Salvar") : setStatusModeEdit("Editar Nome")

        if (statusModeEdit === 'Salvar' && inputName !== nickname) {
            let users = await getUsers();
            for (let user of users) {
                if (user.nickname === inputName) {
                    Alert('warning', '', 'Nome de utilizador já existente!');
                    document.querySelector('#nickname').value = nickname
                    return;
                }
            }
            updateNicknameById(idUser, inputName)
        }
    }

    const changeInputName = (event) => {
        setInputName(event.target.value)
    }

    const cancelEditAvatar = () => {
        setHasSelectAvatar(false)
    }

    const sairDaConta = () => {
        logOut(getAuth())
        navigate('/Login')
    }

    const deletarConta = () => {
        AlertDeleteAccount('warning', '', 'Deseja mesmo deletar sua conta ?', true, idUser)
    }


    return (
        <>
            <div id='sectionPage'>
                <div className={style.painel}>

                    {
                        hasSelectAvatar ? (<>
                            <div id={style.sectionAvatar}>
                                <h4>Selecione um avatar</h4>
                                <span>
                                    <img id='0' src={`/imgs/avatar/${avatarList[0]}`} onClick={selectAvatar} />
                                    <img id='1' src={`/imgs/avatar/${avatarList[1]}`} onClick={selectAvatar} />
                                    <img id='2' src={`/imgs/avatar/${avatarList[2]}`} onClick={selectAvatar} />
                                    <img id='3' src={`/imgs/avatar/${avatarList[3]}`} onClick={selectAvatar} />
                                    <img id='4' src={`/imgs/avatar/${avatarList[4]}`} onClick={selectAvatar} />
                                </span>
                                <span>
                                    <img id='5' src={`/imgs/avatar/${avatarList[5]}`} onClick={selectAvatar} />
                                    <img id='6' src={`/imgs/avatar/${avatarList[6]}`} onClick={selectAvatar} />
                                    <img id='7' src={`/imgs/avatar/${avatarList[7]}`} onClick={selectAvatar} />
                                    <img id='8' src={`/imgs/avatar/${avatarList[8]}`} onClick={selectAvatar} />
                                    <img id='9' src={`/imgs/avatar/${avatarList[9]}`} onClick={selectAvatar} />
                                </span>
                                <span>
                                    <img id='10' src={`/imgs/avatar/${avatarList[10]}`} onClick={selectAvatar} />
                                    <img id='11' src={`/imgs/avatar/${avatarList[11]}`} onClick={selectAvatar} />
                                    <img id='12' src={`/imgs/avatar/${avatarList[12]}`} onClick={selectAvatar} />
                                    <img id='13' src={`/imgs/avatar/${avatarList[13]}`} onClick={selectAvatar} />
                                    <img id='14' src={`/imgs/avatar/${avatarList[14]}`} onClick={selectAvatar} />
                                </span>
                                <span>
                                    <img id='15' src={`/imgs/avatar/${avatarList[15]}`} onClick={selectAvatar} />
                                    <img id='16' src={`/imgs/avatar/${avatarList[16]}`} onClick={selectAvatar} />
                                    <img id='17' src={`/imgs/avatar/${avatarList[17]}`} onClick={selectAvatar} />
                                    <img id='18' src={`/imgs/avatar/${avatarList[18]}`} onClick={selectAvatar} />
                                    <img id='19' src={`/imgs/avatar/${avatarList[19]}`} onClick={selectAvatar} />
                                </span>
                                <br />
                                <Button className={style.buttonActionMui} variant="contained" onClick={cancelEditAvatar}>
                                    <ArrowBackIcon color='#fff' />
                                    Voltar
                                </Button>
                            </div>


                        </>) : (<>

                            <div className={style.content}>
                                <div id={style.textFields}>
                                    <span id={style.selectionAvatar} onClick={openSelectionAvatar}>
                                        <Avatar alt="Avatar" src={`/imgs/avatar/${avatarSelecionado}`} />
                                        <h4>Alterar avatar</h4>
                                    </span>

                                    <div id={style.editNome}>
                                        <TextField
                                            id="nickname"
                                            variant="outlined"
                                            disabled={inputDisable}
                                            defaultValue={inputName}
                                            onChange={changeInputName}
                                            style={{ width: '70%' }}
                                        />
                                        <Button variant="outlined" style={{ width: '30%' }} onClick={editNome}>
                                            <EditIcon color='blue' /> {statusModeEdit}
                                        </Button>
                                    </div>
                                    <br />
                                    <TextField
                                        id="email"
                                        variant="outlined"
                                        disabled={true}
                                        defaultValue={email}
                                    />
                                    <br />

                                    <Button className={style.buttonActionMui} onClick={sairDaConta} variant="contained" color='success'>
                                        Sair da conta &nbsp;
                                        <LogoutRoundedIcon color={'#fff'} />
                                    </Button>
                                    <br />
                                    <Button className={style.buttonActionMui} onClick={deletarConta} variant="outlined" color='error'>
                                        Deletar conta&nbsp;
                                        <DeleteIcon color={'#fff'} />
                                    </Button>

                                </div>

                            </div>
                        </>)
                    }
                </div>
            </div>
        </>
    );
}

export default Perfil;