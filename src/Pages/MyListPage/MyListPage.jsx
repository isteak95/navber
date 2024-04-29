import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert

const MyListPage = () => {
    const [userSpots, setUserSpots] = useState([]);

    useEffect(() => {
        const fetchUserSpots = async () => {
            try {
                const response = await axios.get('http://localhost:5000/addspot');
                setUserSpots(response.data);
            } catch (error) {
                console.error('Error fetching user spots:', error);
            }
        };

        fetchUserSpots();
    }, []);

    const handleDeleteSpot = async (id) => {
        // Show SweetAlert confirmation
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this spot!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        });

        if (result.isConfirmed) {
            try {
                
                await axios.delete(`http://localhost:5000/addspot/${id}`);
                setUserSpots(userSpots.filter(spot => spot._id !== id));
                // Show success message
                Swal.fire('Deleted!', 'Your spot has been deleted.', 'success');
            } catch (error) {
                console.error('Error deleting spot:', error);
                // Show error message
                Swal.fire('Error!', 'Failed to delete the spot.', 'error');
            }
        }
    };

    return (
        <div className="overflow-x-auto lg:mx-20">
            <h1 className="text-center lg:text-4xl md:text-2xl text-xl text-green-500 my-7 font-bold py-5">My Spot List</h1>
            <table className="table table-zebra ">
                <thead>
                    <tr >
                        <th className='lg:text-lg'>Tourists Spot Name</th>
                        <th className='lg:text-lg'>Average Cost</th>
                        <th className='lg:text-lg'>Total Visitors Per Year</th>
                        <th className='lg:text-lg'>Total Travel Time</th>
                        <th className='lg:text-lg'>Seasonality</th>
                        <th className='lg:text-lg'>Actions</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {userSpots.map((spot) => (
                        <tr key={spot._id}>
                            <td>{spot.tourists_spot_name}</td>
                            <td>${spot.average_cost}</td>
                            <td>{spot.total_visitors_per_year}</td>
                            <td>{spot.travel_time}</td>
                            <td>{spot.seasonality}</td>

                            <td >
                                <Link to={`/update/${spot._id}`}>
                                    <button className="btn btn-primary mr-2">Update</button>
                                </Link>
                                <button className="btn  btn-error" onClick={() => handleDeleteSpot(spot._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyListPage;
