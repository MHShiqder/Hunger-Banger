import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../Components/SectionTitle";
import { FaTrashAlt, FaUser } from "react-icons/fa";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: users = [], isLoading, } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const result = await axiosSecure.get('/users')
            return result.data;
        }

    })



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
                
                axiosSecure.delete(`/users/${id}`)
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
    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Promoted!",
                                text: `${user.name} has been promoted to Admin`,
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }



    return (
        <div>
            {
                isLoading
                    ?
                    <>
                        <div className=' flex justify-center items-center h-screen'>
                            <progress className="progress w-80 "></progress>
                        </div>
                    </>
                    :
                    <>
                        <div className=''>
                            <SectionTitle SubHeading={"How Many"} Heading={"Manage Users ?"}></SectionTitle>
                            <div className='flex  mb-12 mt-10'>
                                <h2 className='text-4xl flex-1'>Total Users: {users.length}</h2>

                            </div>
                            <div className="overflow-x-auto ">
                                <table className="table ">
                                    {/* head */}
                                    <thead className='border bg-slate-200'>
                                        <tr>
                                            <th>
                                                #
                                            </th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                            <th >Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map((user, idx) => <tr key={idx}>
                                                <th>
                                                    {
                                                        idx + 1
                                                    }
                                                </th>
                                                <td>
                                                    {user.name}
                                                </td>
                                                <td>
                                                    {user.email}
                                                </td>
                                                <td>
                                                    {
                                                        user.role == "Admin" ?
                                                            "admin" :
                                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-lg text-white bg-orange-400 min-h-0 h-auto p-2">
                                                                <FaUser></FaUser>
                                                            </button>
                                                    }
                                                </td>
                                                <td>
                                                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-lg text-white min-h-0 h-auto p-2 bg-red-700">
                                                        <FaTrashAlt></FaTrashAlt>
                                                    </button>
                                                </td>
                                            </tr>)
                                        }


                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </>
            }

        </div>
    );
};

export default AllUsers;