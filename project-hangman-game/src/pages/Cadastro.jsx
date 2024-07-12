import '../css/index.css'
import style from '../css/LoginCadastro.module.css'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from '../components/SweetAlert';
import { getUsers, postUser } from '../services/userService';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import avatarList from '../avatares.json'

function Cadastro() {
    const [isLoading, setIsLoading] = useState('none');

    const [hasSelectAvatar, setHasSelectAvatar] = useState(false)
    const [avatarSelecionado, setAvatarSelecionado] = useState(avatarList[0])
    const [idAvatar, setIdAvatar] = useState(0)

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => { event.preventDefault(); };

    const [nomeUtilizador, setNomeUtilizador] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');

    const handleChangeNomeUtilizador = (event) => { setNomeUtilizador(event.target.value); document.querySelector('#input-nickname').style.border = 'none' }
    const handleChangeEmail = (event) => { setEmail(event.target.value); document.querySelector('#input-email').style.border = 'none' }
    const handleChangeSenha = (event) => { setSenha(event.target.value); document.querySelector('#input-senha').style.border = 'none' }
    const handleChangeConfirmSenha = (event) => { setConfirmSenha(event.target.value); document.querySelector('#input-confirmSenha').style.border = 'none' }

    const [dadosValidados, setDadosValidados] = useState(false)


    const openSelectionAvatar = () => {
        setHasSelectAvatar(true)
    }
    const selectAvatar = (event) => {
        const indexAvatar = parseInt(event.target.id)
        setHasSelectAvatar(false)
        setAvatarSelecionado(avatarList[indexAvatar])
        setIdAvatar(indexAvatar)
    }



    const validadores = {
        nomeUtilizador: (valor) => valor.trim() !== '',
        email: (valor) => /\S+@\S+\.\S+/.test(valor),
        senha: (valor) => /[0-9a-zA-Z$*&@#]{8,}/.test(valor),
        confirmSenha: (valor) => valor === senha
    };

    const mensagensDeErro = {
        nomeUtilizador: 'Nome de utilizador inválido!',
        email: 'E-mail inválido!',
        senha: 'A senha deve conter no mínimo 8 caracteres!',
        confirmSenha: 'Confirme a mesma senha!'
    };


    const validarCampos = async () => {
        let inputs = [
            { id: '#input-nickname', referencia: 'nomeUtilizador', valor: nomeUtilizador },
            { id: '#input-email', referencia: 'email', valor: email },
            { id: '#input-senha', referencia: 'senha', valor: senha },
            { id: '#input-confirmSenha', referencia: 'confirmSenha', valor: confirmSenha }
        ];

        let camposValidados = true;

        for (let input of inputs) {
            if (!validadores[input.referencia](input.valor)) {
                Alert('warning', '', mensagensDeErro[input.referencia], '9000');
                document.querySelector(input.id).style.borderBottom = '2px solid rgba(255,0,0,0.40)';
                camposValidados = false;
                return;
            }
        }

        if (camposValidados) {
            setIsLoading('flex');
            await validarDados();
            setIsLoading('none');
        }
    }


    const validarDados = async () => {
        let users = await getUsers();
        let hasError = false

        for (let user of users) {
            if (user.nickname === nomeUtilizador) {
                Alert('warning', '', 'Nome de utilizador já existente!');
                hasError = true
                return;
            } else if (user.email === email) {
                Alert('warning', '', 'Esse email já foi cadastrado!');
                hasError = true
                return;
            }
        }
        if (!hasError) {
            setDadosValidados(true)
        }

    }

    useEffect(() => {
        if (dadosValidados) {
            try {
                setIsLoading('flex');
                postUser(
                    idAvatar,
                    nomeUtilizador.trim(),
                    email.trim().toLowerCase(),
                    senha.trim()

                ).then(() => {
                    Alert(
                        'success',
                        'Cadastro realizado com sucesso !',
                        'Enviamos um link de verificação para seu email <br/>Verifique sua caixa de entrada ou spam',
                        '',
                        true
                    );
                    setIsLoading('none');
                })

            } catch (error) {
                console.error(error);
                setIsLoading('none');
            }
        }
    }, [dadosValidados])

    return (
        <>
            <div id='sectionPage'>
                <Box className="loadingContainer" display={isLoading}>
                    <CircularProgress />
                    <span>Aguarde...</span>
                </Box>

                <div id={style.card} className='painel'>
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
                            </div>


                        </>) : (<>

                            <div className={style.content}>
                                <div>
                                    <p>
                                        <b style={{ fontSize: '1.2em', color: '#1565c0' }}>Cadastro</b>
                                        <br />
                                        <span>Crie um usuário e senha</span>
                                    </p>
                                </div>

                                <div id={style.textFields}>
                                    <span id={style.selectionAvatar} onClick={openSelectionAvatar}>
                                        <Avatar alt="Avatar" src={`/imgs/avatar/${avatarSelecionado}`} />
                                        <h4>Escolher avatar</h4>
                                    </span>

                                    <TextField
                                        id="input-nickname"
                                        label="Nome de usuário"
                                        variant="filled"
                                        onChange={handleChangeNomeUtilizador} />
                                    <br />
                                    <TextField
                                        id="input-email"
                                        label="Email"
                                        variant="filled"
                                        onChange={handleChangeEmail} />
                                    <br />

                                    <FormControl variant="filled">
                                        <InputLabel htmlFor="input-senha">Senha</InputLabel>
                                        <FilledInput
                                            id="input-senha"
                                            onChange={handleChangeSenha}
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                    <br />
                                    <FormControl variant="filled">
                                        <InputLabel htmlFor="input-confirmSenha">Confirmar senha</InputLabel>
                                        <FilledInput
                                            id="input-confirmSenha"
                                            onChange={handleChangeConfirmSenha}
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>

                                    <br />

                                    <Button variant="contained" onClick={validarCampos}>Criar conta</Button>

                                </div>

                                <span id={style.infoTextCadastro}>
                                    Já tem uma conta ?
                                    <Link to='/Login'>
                                        <b> Fazer Login</b>
                                    </Link>
                                </span>
                            </div>
                        </>)
                    }

                </div>
            </div>
        </>
    )
}
export default Cadastro;
