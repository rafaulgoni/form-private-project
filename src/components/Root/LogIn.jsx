import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase.config";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


const LogIn = () => {
    const navigate = useNavigate()
    const { signInUser, signInGoogle } = useContext(AuthContext);
    const emailRef = useRef(null)
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset()
                navigate('/order')
            })
            .catch(error => console.error(error))
    }

    const handleGoogle = () => {
        signInGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/order')
            })
            .catch(error => console.error(error))
    }

    const forgetPassword = () => {
        const email = emailRef.current.value;
        if(!email){
            alert('give me you email')
            return
        // }else if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        //     alert('please write a valid email')
        //     return
        }
        sendPasswordResetEmail(auth, email) 
        .then(()=>{
            alert('please Check your email')
        })
        .catch(error =>{
            console.error(error);
        })   
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                name="email"
                                placeholder="email"
                                ref={emailRef}
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered w-full"
                                    required />
                                <samp className="absolute top-4 right-3" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </samp>
                            </div>
                            <label className="label">
                                <a href="#" onClick={forgetPassword} className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div>
                        <p className="p-4 border">Please register first, <Link to='/register'><button className="btn-active btn-link">Register</button></Link></p>
                        <button onClick={handleGoogle} className="btn btn-info w-full">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;