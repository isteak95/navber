import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllTouristsSpot = () => {
    const [spots, setSpots] = useState([]);
    const [sortByCostAsc, setSortByCostAsc] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/addspot')
            .then((res) => res.json())
            .then((data) => setSpots(data))
            .catch((error) => console.error('Error fetching spots:', error));
    }, []);

    const handleSort = () => {
        setSortByCostAsc(!sortByCostAsc);
    };

    const sortedSpots = [...spots].sort((a, b) => {
        if (sortByCostAsc) {
            return a.average_cost - b.average_cost;
        } else {
            return b.average_cost - a.average_cost;
        }
    });

    return (
        <div>
            <h1 className="text-center text-4xl font-bold py-5">All Tourists Spots</h1>
            <div className="flex justify-center pt-10">
                <button className="btn btn-secondary text-xl font-bold" onClick={handleSort}>
                    {sortByCostAsc ? 'Sort by Cost (Asc)' : 'Sort by Cost (Desc)'}
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:mx-28 mx-6 my-10">
                {sortedSpots.map((spot) => (
                    <div key={spot._id} className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <img className="h-[300px] w-full object-cover mb-4" src={spot.image} alt={spot.tourists_spot_name} />
                            <h3 className="text-xl font-bold mb-2">{spot.tourists_spot_name}</h3>
                            <p className="text-lg font-semibold">Average Cost: ${spot.average_cost}</p>
                            <p className="text-lg font-semibold">Total Visitors Per Year: {spot.total_visitors_per_year}</p>
                            <p className="text-lg font-semibold">Travel Time: {spot.travel_time}</p>
                            <p className="text-lg font-semibold">Seasonality: {spot.seasonality}</p>
                            <Link to={`/view-details/${spot._id}`}>
                                <button className="btn btn-accent w-full mt-4">View Details</button>
                            </Link>
                        </div>
                    </div>
                ))} 
            </div>
        </div>
    );
};

export default AllTouristsSpot;
