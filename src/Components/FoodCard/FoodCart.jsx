import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';


const FoodCart = ({ item }) => {
    const [,refetch]=useCart()
    const axiosSecure=useAxiosSecure()
    const navigate = useNavigate()
    const location = useLocation()
    const { user } = useAuth();
    const { name, image, recipe, price, _id } = item;
    const handleCartItem = () => {
        if (user && user.email) {

            const cartData = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/cart', cartData)
                .then((result) => {
                    console.log(result.data)
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch()
                })
        }
        else {
            Swal.fire({
                title: "Sorry, You are not logged in",
                text: "Please login to add items to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Go to login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            });
        }
    }
    return (
        <div>
            <div className="card card-compact rounded-none bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt={name} />
                    <p className='absolute bg-black text-white px-3 py-1 top-3 right-2'>{price}</p>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className='text-center my-5'>
                        <button onClick={ handleCartItem} className='btn btn-outline border-0 border-b-4 border-orange-400 bg-slate-100 text-black text-lg'>Order Your Favorite Food</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;