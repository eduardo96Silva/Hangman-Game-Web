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
import { Link } from 'react-router-dom';
import { Alert } from '../components/SweetAlert';

function Cadastro() {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => { event.preventDefault(); };

    const validarDados = () => {
        const nickname = document.querySelector('#input-nickname').value
        const email = document.querySelector('#input-email').value
        const senha = document.querySelector('#input-senha').value    
        const confirmSenha = document.querySelector('#input-confirmSenha').value    

        var validationEmail = /\S+@\S+\.\S+/;
        var validationSenha = /[0-9a-zA-Z$*&@#]{8,}/;

    }


    return (
        <>
            <div id='sectionPage'>
                <div id={style.card} className='painel'>
                    <div className={style.content}>
                        <div>
                            <p>
                                <b style={{ fontSize: '1.2em', color: '#1565c0' }}>Cadastro</b> 
                                <br />
                                <span>Crie um usuário e senha</span>
                            </p>
                        </div>

                        <div id={style.textFields}>
                            <TextField id="input-nickname" label="Nome de usuário" variant="filled" />
                            <br />
                            <TextField id="input-email" label="Email" variant="filled" />
                            <br />

                            <FormControl variant="filled">
                                <InputLabel htmlFor="input-senha">Senha</InputLabel>
                                <FilledInput
                                    id="input-senha"
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

                            <Button variant="contained" onClick={validarDados}>Criar conta</Button>

                        </div>

                        <span id={style.infoTextCadastro}>
                            Já tem uma conta ?
                            <Link to='/Login'>
                                <b> Fazer Login</b>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cadastro;
