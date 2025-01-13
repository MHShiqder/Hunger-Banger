import GoogleButton from "react-google-button";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const SocialLogin = () => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const { googleLogin } = useAuth();
    const handleGoogleSignIn = () => {
        googleLogin()
            .then(res => {
                console.log(res)
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Logged in succesfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                axiosPublic.post('/user', {
                    name: res.user.displayName,
                    email: res.user.email
                })
                .then(res=>{
                    console.log(res.data)
                })
                navigate("/")
            }
            )
            .catch(err => console.log(err))
    }
    return (
        <div className="flex justify-center">
            <GoogleButton onClick={handleGoogleSignIn}></GoogleButton>
        </div>
    );
};

export default SocialLogin;