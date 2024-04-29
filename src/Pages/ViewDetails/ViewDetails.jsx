import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
    const { id } = useParams();
    const [spotDetails, setSpotDetails] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/addspot/${id}`)
            .then((res) => res.json())
            .then((data) => setSpotDetails(data))
            .catch((error) => console.error('Error fetching spot details:', error));
    }, [id]);

    if (!spotDetails) {
        return <div className="container mx-auto py-10 text-center">Loading...</div>;
    }

    return (
        <div className="container px-4 py-10">
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold  m-1a my-10">{spotDetails.tourists_spot_name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <div className="mb-8 md:mt-14 lg:mt-1">
                    <img src={spotDetails.image} alt={spotDetails.tourists_spot_name} className="w-full h-auto rounded-lg" />
                </div>
                <div className=" lg:flex lg:mt-10 lg:w-[1100px] lg:justify-between ">
                    <div >
                        <p className="text-lg"><strong>Country:</strong> {spotDetails.country_name}</p>
                        <p className="text-lg"><strong>Average Cost: </strong>$ {spotDetails.average_cost}</p>
                        <p className="text-lg"><strong>Location:</strong> {spotDetails.location}</p>
                        <p className="text-lg"><strong>Short Description:</strong> {spotDetails.short_description}</p>
                    </div>
                    <div>
                        <p className="text-lg"><strong>Total Visitors Per Year:</strong> {spotDetails.total_visitors_per_year}</p>
                        <p className="text-lg"><strong>Seasonality:</strong> {spotDetails.seasonality}</p>
                        <p className="text-lg"><strong>Travel Time:</strong> {spotDetails.travel_time}</p>
                        <p className="text-lg"><strong>User Email:</strong> {spotDetails.user_email}</p>
                        <p className="text-lg"><strong>User Name:</strong> {spotDetails.user_name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
