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
import { db } from '../data/services/firebase-config';
import { collection } from 'firebase/firestore/lite';
import { getDocs } from 'firebase/firestore/lite';

function Cadastro() {


    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => { event.preventDefault(); };

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
                            <TextField id="filled-basic" label="Nome de usuário" variant="filled" />
                            <br />

                            <FormControl variant="filled">
                                <InputLabel htmlFor="inputSenha">Senha</InputLabel>
                                <FilledInput
                                    id="inputSenha"
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
                                <InputLabel htmlFor="inputConfirmSenha">Confirmar senha</InputLabel>
                                <FilledInput
                                    id="inputConfirmSenha"
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

                            <Button variant="contained">Criar conta</Button>

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
