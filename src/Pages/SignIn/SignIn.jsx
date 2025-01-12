
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () => {
    const navigate = useNavigate()
    const { signUpUser, updateUser } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        const { email, password, name, photo } = data
        signUpUser(email, password)
            .then((result) => {
                console.log(result.user)
                updateUser(name, photo)
                    .then((result) => {
                        console.log(result)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error=>{
                console.log("error:",error)
            })

        Swal.fire({
            title: "Signed Up Successfully!",
            icon: "success",
        });
        reset()
        navigate("/")
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen px-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                        <p className="py-6">
                            Join us today! Create your account in seconds to access exclusive features, personalized experiences, and seamless interaction. Sign up now and get started!
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name")} type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo-URL</span>
                                </label>
                                <input {...register("photo")} type="text" placeholder="photo-url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", {
                                    required: true, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
                                })} type="password" placeholder="password" className="input input-bordered" required />
                                {errors.password && <span className="text-red-600 mt-2">Password should contain at least one special character,one uppercase,one lowercase,one number and 6 characters</span>}

                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign-Up" className="btn btn-primary" />
                            </div>
                        </form>
                        <p className='text-center mb-5'><small >Already registered?<Link to={"/login"} > Go to log in </Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;