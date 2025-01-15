import React from 'react';
import useCart from '../../Hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import SectionTitle from '../../Components/SectionTitle';

const Cart = () => {
    const [cart, refetch, isLoading] = useCart()
    const axiosSecure = useAxiosSecure()
    const totalPrice = cart.reduce((total, item) => {
        return total + item.price;
    }, 0)
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }
    return (
        <div className=''>
            {
                isLoading
                    ?
                    <div className=' flex justify-center items-center h-screen'>
                        
                        <progress className="progress w-80 "></progress>
                    </div>
                    :
                    <div className=''>
                        <SectionTitle SubHeading={"My Cart"} Heading={"Add More ?"}></SectionTitle>
                        <div className='flex  mb-12 mt-10'>
                            <h2 className='text-4xl flex-1'>Total Orders: {cart.length}</h2>
                            <h2 className='text-4xl flex-1 text-center'>Total Price: $ {totalPrice}</h2>
                            <div className='flex-1 text-end'>
                            <button className='btn btn-accent w-44'>Pay</button>
                            </div>
                        </div>
                        <div className="overflow-x-auto ">
                            <table className="table ">
                                {/* head */}
                                <thead className='border bg-slate-200'>
                                    <tr>
                                        <th>
                                            #
                                        </th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th >Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map((item, idx) => <tr key={idx}>
                                            <th>
                                                {
                                                    idx + 1
                                                }
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={item.image}
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>${item.price}</td>
                                            <td>
                                                <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg text-red-600">
                                                    <FaTrashAlt></FaTrashAlt>
                                                </button>
                                            </td>
                                        </tr>)
                                    }


                                </tbody>

                            </table>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Cart;