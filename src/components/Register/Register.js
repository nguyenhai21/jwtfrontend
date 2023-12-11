import './Register.scss';
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect } from 'react';

const Register = (props) => {
    let history = useHistory();
    const handleLoginAccount = () => {
        history.push("/login");
    }
    useEffect(() => {
        axios.get("http://localhost:8080/api/test-api").then(data => {
            console.log('check data axios: ', data)
        })
    }, []);

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
                            <input type='text' className='form-control' placeholder='Email address' />
                        </div>

                        <div className='form-group'>
                            <label>PhoneNumber: </label>
                            <input type='text' className='form-control' placeholder='Phone Number' />
                        </div>

                        <div className='form-group'>
                            <label>UserName: </label>
                            <input type='text' className='form-control' placeholder='UserName' />
                        </div>

                        <div className='form-group'>
                            <label>Password: </label>
                            <input type='password' className='form-control' placeholder='Password' />
                        </div>

                        <div className='form-group'>
                            <label>Re-Enter Password:</label>
                            <input type='password' className='form-control' placeholder='Re-Enter Password:' />
                        </div>

                        <button className='btn btn-primary'>Register</button>

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