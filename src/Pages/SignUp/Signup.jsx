import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"

const Signup = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    console.log(watch("example"))
    return (

     
         <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name",{ required: true })} name='name' placeholder="Name" className="input input-bordered"  />
                                {errors.name && <span className='text-red-300'>This field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email",{ required: true })} name='email' placeholder="email" className="input input-bordered"  />
                                {errors.email && <span>This field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password")} name='password' placeholder="password" className="input input-bordered"  />
         
                            </div>
                            <div className="form-control mt-6">
                                
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>

                        </form>
                        
                        <p><small className='p-8'>New Here ?<Link to="/signup"> SignUp</Link></small></p>
                    </div>
        
    );
};

export default Signup;