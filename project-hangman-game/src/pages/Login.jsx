import '../css/index.css'
import style from '../css/LoginCadastro.module.css'
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUserByEmail } from '../services/userService';
import { Alert, AlertEmailPendingVerification } from '../components/SweetAlert';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { logIn } from '../services/authService';
import { getAuth, sendEmailVerification, signOut } from 'firebase/auth';

function Login() {

    const [isLoading, setIsLoading] = useState('none');
    const navigate = useNavigate()

    // State Visualizar Senha
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => { event.preventDefault(); };

    // State Email e Senha
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const handleChangeEmail = (event) => { setEmail(event.target.value); document.querySelector('#input-email').style.border = 'none' }
    const handleChangeSenha = (event) => { setSenha(event.target.value); document.querySelector('#input-senha').style.border = 'none' }


    const validadores = {
        email: (valor) => /\S+@\S+\.\S+/.test(valor),
        senha: (valor) => /[0-9a-zA-Z$*&@#]{8,}/.test(valor),
    };


    const validarCampos = async () => {
        let inputs = [
            { id: '#input-email', referencia: 'email', valor: email },
            { id: '#input-senha', referencia: 'senha', valor: senha },
        ];

        let camposValidados = true;

        for (let input of inputs) {
            if (!validadores[input.referencia](input.valor)) {
                Alert('warning', '', 'Email ou senha inválidos !', '9000');
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
        setIsLoading('flex');
        const emailExists = await getUserByEmail(email, false)
        setIsLoading('none');

        if (emailExists.empty) {
            Alert(
                'warning',
                '',
                'Esse usuário não existe !',
                '9000',
                true
            )

        } else {
            setIsLoading('flex');
            const response = await logIn(email.trim(), senha)

            if (response === 'Success') {
                await getUserByEmail(email.trim(), true)
                setIsLoading('none');
                navigate('/Perfil')

            } else if (response === 'Email Verification') {
                setIsLoading('none');
                AlertEmailPendingVerification(
                    'warning',
                    'Verificação pendente',
                    'Por favor, verifique seu email antes de fazer login.',
                    true,true,
                    email,senha
                );
            } else if (response === 'Invalid Credentials') {
                setIsLoading('none');
                Alert(
                    'warning',
                    '',
                    'Email ou senha incorretos !',
                    '9000',
                    true
                );
            } else {
                setIsLoading('none');
                Alert(
                    'error',
                    'Ops...',
                    'Houve um problema da nossa parte <br/>Por favor tente novamente mais tarde.',
                    '9000'
                );
            }
        }
    }


    return (
        <>
            <div id='sectionPage'>
                <Box className="loadingContainer" display={isLoading}>
                    <CircularProgress />
                    <span>Aguarde...</span>
                </Box>
                <div id={style.card} className='painel'>
                    <div className={style.content}>
                        <div>
                            <p>
                                <b style={{ fontSize: '1.2em', color: '#1565c0' }}>Login</b> <br />
                                <span>Informe suas credenciais para acessar sua conta</span>
                            </p>
                        </div>

                        <div id={style.textFields}>
                            <TextField
                                id="input-email"
                                label="Email"
                                variant="filled"
                                onChange={handleChangeEmail}
                            /><br />

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

                            <Button variant="contained" onClick={validarCampos}>Entrar</Button>

                        </div>

                        <span id={style.infoTextCadastro}>
                            Não tem uma conta ?
                            <Link to='/Cadastro'>
                                <b> Cadastrar-se</b>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;
