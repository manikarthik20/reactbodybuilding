import React, { useState } from 'react'
import '../account/Account.css'
import FormInput from './FormInput';
import axios from 'axios';
import { Facebook, Apple } from '@mui/icons-material';


//import { Facebook } from '@material-ui/icons'



const Account = () => {

    //=========================================== ** Register data Start ** ====================================================
    const [values, setValues] = useState({
        userName: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "userName",
            type: "text",
            placeholder: "Username",
            errorMessage: "UserName Should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            pattern: `^[A-Za-z0-9]{3,16}$`,
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It Should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Birthday"
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password Should be 8-20 characters and innclude at least 1 letter , 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "ConfirmPassword",
            errorMessage: "Passwords don't match",
            label: "ConfirmPassword",
            pattern: values.password,
            required: true,
        },
    ]


    const handleInputChange = e => {
        e.preventDefault();
        setValues({
            ...values, [e.target.name]: e.target.value,
        })
    };

    const submitHandlerRegister = (e) => {
        e.preventDefault();
        console.log(values);
        axios.post('http://localhost:8083/saveUser', values)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    //================================================ ** Register data end ** =====================================



    //================================================== ** Login data start ** ========================================


    //const [backend, setBackend] = useState("");
    const [logins, setLogins] = useState({
        userName: "",
        password: "",
    });
    const loginDetails = [
        {
            id: 1,
            name: "userName",
            type: "text",
            placeholder: "Username",
            errorMessage: "UserName Should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            pattern: `^[A-Za-z0-9]{3,16}$`,
            required: true,

        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password Should be 8-20 characters and innclude at least 1 letter , 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        }
    ]


    // useEffect(() => {

    //         axios.get(`http://localhost:8083/all`)
    //         .then(response => {
    //          response.data.map((res) => setBackend(res.userName))
    //         })
    //         console.log(backend)

    //   }, []);


    const handleLoginChange = (e) => {
        e.preventDefault();
        setLogins({
            ...logins, [e.target.name]: e.target.value,
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8083/all`)
            .then(response => {
                response.data.map((res) => {
                    const container = {};
                    if (res.userName === logins.userName && res.password === logins.password) {
                        container.username = res.userName;
                        container.password = res.password;
                        localStorage.setItem("username", res.userName)
                        localStorage.setItem("password", res.password)
                        alert("Sucessfully login into your account   " + res.userName);
                        window.location.replace('/');
                    }
                    // else{
                    //     alert(res.userName+' on this name there is no account register till now')
                    // }
                    console.log(container);
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    //    const submitHandler = (e) => {
    //     e.preventDefault();
    //     console.log(values);
    //     axios.post('http://localhost:8083/saveUser', values)
    //         .then(response => {
    //             console.log(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }





    //================================================== ** Login data end ** ==========================================

    return (
        <div className="container" style={{ marginTop: "30px" }}>
            <h1 style={{marginRight:"900px"}}><strong>My Account</strong></h1>
            <div className="row" style={{ marginTop: "20px" }}>
                <div className="col-sm-4 offset-2" style={{ padding: "50px" }}>
                    <h3><strong>Login</strong></h3>
                    <form onSubmit={submitHandler} style={{ marginTop: "30px" }} >

                        {loginDetails.map((login) => (
                            <FormInput key={login.id}
                                {...login} value={logins[login.name]}
                                onChange={handleLoginChange}
                            />
                        ))}
                        <button className="btn btn-success" type='Submit'>Login</button>
                        <p style={{ marginTop: "30px", textAlign: "center" }}><a href="#"><strong>Forgot your password?</strong></a></p>
                        <hr />
                        <div className="text-center" style={{ marginTop: "30px" }}>
                            <button type="submit" className="btn btn-info"><Facebook id="i" /> SIGN IN</button>
                            <button type="submit" className="btn btn-dark" style={{ marginLeft: "50px" }}> <Apple id="a" />SIGN IN</button>
                        </div>
                    </form>
                    {/* <form style="margin-top: 30px;">
                <div className="form-group">
                    
                    <input type="text" name="username" className="form-control"  required placeholder=" Username"/>
                </div>
                <div className="alert alert-danger">
                    *username is required
                </div>
                <div className="form-group" style="margin-top: 30px;">
                    <input type="password" name="Password" pattern="[abc]\d." className="form-control" ngModel required placeholder="Password"/>
                </div>
                <div className="alert alert-danger">
                    <div >
                        Password must required
                    </div>
                    <div >
                        pattern is not matched
                    </div>
                </div>
                <div className="text-center" style="margin-top: 30px;">
                    <button type="submit" className="btn btn-success">Login </button>
                </div>
                <p style="margin-top: 30px; text-align: center;"><a href="#"><strong>Forgot your password?</strong></a></p>
                <hr/>
                <div className="text-center" style="margin-top: 30px;">
                    <button type="submit" className="btn btn-info"><i className="fab fa-facebook"></i>SIGN IN</button>
                    <button type="submit" className="btn btn-dark" style="margin-left: 50px;"><i className="fab fa-apple"></i>SIGN IN</button>
                </div>
            </form> */}
                </div>
                <div className="col-sm-4 offset-1 bg-light" style={{ padding: "50px" }} >
                    <h3><strong>Create an Account</strong></h3>
                    <form onSubmit={submitHandlerRegister} className='registerForm' style={{ marginTop: "30px" }}>

                        {inputs.map((input) => (
                            <FormInput key={input.id}
                                {...input} value={values[input.name]}
                                onChange={handleInputChange} />
                        ))}
                        <div className="text-center" style={{ marginTop: "30px" }}>
                            <button type="submit" className="btn btn-outline-info">CREATE ACCOUNT </button>
                        </div>
                        <p style={{ marginTop: "30px" }}>By clicking "Create Account" you agree to the Bodybuilding.com<a href="#">Terms of Use</a>and <a href="#">Privacy Policy</a></p>
                        <hr />
                        <div className="text-center" style={{ marginTop: "30px" }}>
                            <button type="submit" className="btn btn-info"><Facebook id="i"/>SIGN UP</button>
                            <button type="submit" className="btn btn-dark" style={{ marginLeft: "50px" }}><Apple id="a"/>SIGN UP</button>
                        </div>
                        <p style={{ marginTop: "30px" }}>We will never post to Facebook without permission.</p>

                    </form>
                    {/* <form  style="margin-top: 30px;">
                <div className="form-group">
                    
                    <input type="email" name="email" className="form-control" ngModel required   placeholder="Email"/>
                </div>
                <div className="alert alert-danger">
                    *Email is required
                </div>
                <div className="form-group" style="margin-top: 30px;">
                    <input type="text" name="username" className="form-control" ngModel required placeholder="Username"/>
                </div>
                <div  className="alert alert-danger">
                    *Username is required
                </div>
                <div className="form-group" style="margin-top: 30px;">
                    <input type="email" name="password" className="form-control" ngModel required  placeholder="Password"/>
                </div>
                <div className="alert alert-danger">
                    <div >
                        Password must required
                    </div>
                    <div>
                        pattern is not matched
                    </div>
                </div>
                <div className="text-center" style="margin-top: 30px;">
                    <button type="submit" className="btn btn-outline-info">CREATE ACCOUNT </button>
                </div>
                <p style="margin-top: 30px; ">By clicking "Create Account" you agree to the Bodybuilding.com<a href="#">Terms of Use</a>and <a href="#">Privacy Policy</a></p>
                <hr/>
                <div className="text-center" style="margin-top: 30px;">
                    <button type="submit" className="btn btn-info"><i className="fab fa-facebook"></i>SIGN UP</button>
                    <button type="submit" className="btn btn-dark" style="margin-left: 50px;"><i className="fab fa-apple"></i>SIGN UP</button>
                </div>
                <p style="margin-top: 30px;">We will never post to Facebook without permission.</p>
            </form> */}
                </div>
            </div>
        </div>
    )
}

export default Account
