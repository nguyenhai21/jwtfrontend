import './Register.scss';
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const defaultValidInput = {
        isValidEmail: true,
        isValidPhone: true,
        isValidUsername: true,
        isValidPassword: true,
        isValidConfirmPassword: true
    }
    const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);

    let history = useHistory();
    const handleLoginAccount = () => {
        history.push("/login");
    }
    useEffect(() => {
        // axios.get("http://localhost:8080/api/v1/test-api").then(data => {
        //     console.log('check data axios: ', data)
        // })

    }, []);

    const isValidateInputs = () => {
        setObjCheckInput(defaultValidInput);
        if (!email) {
            toast.error('Email is required')
            // console.log('>>check defaultValidInput original', { ...defaultValidInput })
            // console.log('>>check defaultValidInput after', { ...defaultValidInput, isValidEmail: false })
            setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
            return false;
        }
        let regularExpressionCheckEmail = /\S+@\S+\.\S+/;
        if (!regularExpressionCheckEmail.test(email)) {
            toast.error('Invalid email format')
            setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
            return false;
        }

        if (!phone) {
            toast.error('Phone is required')
            setObjCheckInput({ ...defaultValidInput, isValidPhone: false });
            return false;
        }
        let regularExpressionCheckPhone = /^\d+$/;
        if (!regularExpressionCheckPhone.test(phone)) {
            toast.error('Please enter the number')
            setObjCheckInput({ ...defaultValidInput, isValidPhone: false });
            return false;
        }
        if (!username) {
            toast.error('UserName is required')
            setObjCheckInput({ ...defaultValidInput, isValidUsername: false });
            return false;
        }

        if (!password) {
            toast.error('Password is required')
            setObjCheckInput({ ...defaultValidInput, isValidPassword: false });
            return false;
        }

        if (password != confirmPassword) {
            toast.error('Your password is not the same')
            setObjCheckInput({ ...defaultValidInput, isValidConfirmPassword: false });
            return false;
        }
        toast.success('created successfully')
        return true;

    }

    const handleRegister = () => {
        let check = isValidateInputs();
        if (check === true) {
            axios.post('http://localhost:8080/api/v1/register', {
                email, phone, username, password
            })
        }
        // let userData = [email, phone, username, password, confirmPassword];
        // console.log('>>check userData: ', userData);
        // 
    }

    return (
        <div className="register-container ">
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
                        <div className='form-group'>
                            <label>Email: </label>
                            <input type="email" className={objCheckInput.isValidEmail ? 'form-control' : 'form-control is-invalid'} placeholder='Email address'
                                value={email} onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        <div className='form-group'>
                            <label>PhoneNumber: </label>
                            <input type='text' className={objCheckInput.isValidPhone ? 'form-control' : 'form-control is-invalid'} placeholder='Phone Number'
                                value={phone} onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>

                        <div className='form-group'>
                            <label>UserName: </label>
                            <input type='text' className={objCheckInput.isValidUsername ? 'form-control' : 'form-control is-invalid'} placeholder='UserName'
                                value={username} onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>

                        <div className='form-group'>
                            <label>Password: </label>
                            <input type='password' className={objCheckInput.isValidPassword ? 'form-control' : 'form-control is-invalid'} placeholder='Password'
                                value={password} onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>

                        <div className='form-group'>
                            <label>Re-Enter Password:</label>
                            <input type='password' className={objCheckInput.isValidConfirmPassword ? 'form-control' : 'form-control is-invalid'} placeholder='Re-Enter Password:'
                                value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}
                            />
                        </div>

                        <button className='btn btn-primary' type='submit' onClick={() => handleRegister()}>Register</button>

                        <hr></hr>
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={() => handleLoginAccount()}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;