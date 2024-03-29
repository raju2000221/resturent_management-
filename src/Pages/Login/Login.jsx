import { useContext, useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
// import { l } from 'vite/dist/node/types.d-jgA8ss1A';
import { Link } from 'react-router-dom';

const Login = () => {


    
const {signin} = useContext(AuthContext);

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },{})
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;
        const captcha = form.captcha.value;
        signin(email, pass)
        .then(result =>{
            const user = result.user;
            console.log(user)

        })
        if(validateCaptcha(captcha)==true){
            alert('match')
        }
        else{
            alert('not match')
            return 0;
        }
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <LoadCanvasTemplate/>
                                
                                
                                <input type="text" name='captcha' placeholder="type the captcha" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p><small className='p-8'>New Here ?<Link to="/signup"> SignUp</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;