import { useState } from 'react';
import './Login.scss';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { loginUser } from '../../services/userService';

const Login = (props) => {
    let history = useHistory();

    const [valueLogin, setValueLogin] = useState("");
    const [password, setPassword] = useState("");

    const defaultObjValidInput = {
        isValidValueLogin: true,
        isValidValuePassword: true
    }
    const [objValidInput, setObjValidInput] = useState(defaultObjValidInput);

    const handleCreateNewAccount = () => {
        history.push("/register");
    }

    const handleLogin = async () => {
        setObjValidInput(defaultObjValidInput);

        if (!valueLogin) {
            setObjValidInput({ ...defaultObjValidInput, isValidValueLogin: false })
            toast.error('Please enter your Email or Phonenumber')
            return;
        }
        if (!password) {
            setObjValidInput({ ...defaultObjValidInput, isValidValuePassword: false })
            toast.error('Please enter your Password')
            return;
        }

        await loginUser(valueLogin, password);
    }

    return (
        <div className="login-container ">
            <div className="container">
                <div className="row px-3 px-sm-0 ">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block ">
                        <div className='brand'>
                            Nguyen Tien Hai
                        </div>
                        <div className='detail'>
                            Nguyen Tien Hai helps you connect
                        </div>
                    </div>
                    <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3 ">
                        <div className='brand d-sm-none'>
                            Nguyen Tien Hai
                        </div>

                        <input type='text'
                            className={objValidInput.isValidValueLogin ? 'form-control' : 'is-invalid form-control'}
                            placeholder='Email or your Number'
                            value={valueLogin}
                            onChange={(event) => { setValueLogin(event.target.value) }}
                        />
                        <input type='password'
                            className={objValidInput.isValidValuePassword ? 'form-control' : 'is-invalid form-control'}
                            placeholder='Password'
                            value={password}
                            onChange={(event) => { setPassword(event.target.value) }}
                        />

                        <button className='btn btn-primary' onClick={() => handleLogin()}>
                            Login
                        </button>
                        <span className='text-center'>
                            <a href='#' className='fogot-password'>Forgot your password ?</a>
                        </span>
                        <hr></hr>
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={() => handleCreateNewAccount()}>
                                Create new accout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;