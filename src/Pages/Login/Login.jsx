import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const { loginUser } = useContext(AuthContext)
    const [disabled, setDisabled] = useState(true);
    const form = useRef()

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleForm = (e) => {
        e.preventDefault()
        // console.log(form.current.email.value);
        const email = form.current.email.value;
        const password = form.current.password.value;
        console.log(email, password)
        loginUser(email, password)

        Swal.fire({
            title: "Logged in",
            icon: "success",
        });

        navigate(from, { replace: true });

        form.current.reset()
    }
    const handleCaptcha = (e) => {
        e.preventDefault()
        if (validateCaptcha(e.target.value)) {
            setDisabled(false)

        }

        else {
            setDisabled(true)
        }
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen p-14">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Securely log in to access your personalized dashboard. Enter your credentials to explore features, manage your account, and stay connected with a seamless experience.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form ref={form} className="card-body pb-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label ">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleCaptcha} name='captcha' type="text" placeholder="enter the captcha" className="input input-bordered" required />


                            </div>
                            <div className="form-control mt-2 ">
                                <button disabled={disabled} onClick={handleForm} className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className='text-center mb-5'><small >New here? <Link to={"/signIn"}>Create A New Account</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;