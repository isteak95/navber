import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const UpdateTouristSpot = ({ id }) => {
    const [touristsSpotName, setTouristsSpotName] = useState('');
    const [countryName, setCountryName] = useState('');
    const [location, setLocation] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [averageCost, setAverageCost] = useState('');
    const [seasonality, setSeasonality] = useState('');
    const [travelTime, setTravelTime] = useState('');
    const [totalVisitorsPerYear, setTotalVisitorsPerYear] = useState('');

    // Fetch tourist spot data based on ID
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/addspot/${id}`);
                const data = await response.json();
                setTouristsSpotName(data.touristsSpotName || '');
                setCountryName(data.countryName || '');
                setLocation(data.location || '');
                setShortDescription(data.shortDescription || '');
                setAverageCost(data.averageCost || '');
                setSeasonality(data.seasonality || '');
                setTravelTime(data.travelTime || '');
                setTotalVisitorsPerYear(data.totalVisitorsPerYear || '');
            } catch (error) {
                console.error('Error fetching tourist spot data:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();

        const updatedData = {
            touristsSpotName,
            countryName,
            location,
            shortDescription,
            averageCost,
            seasonality,
            travelTime,
            totalVisitorsPerYear
        };

        try {
            const response = await fetch(`http://localhost:5000/addspot/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });
            const data = await response.json();
            console.log(data);

            // Display success message
            toast.success(`Tourist spot "${touristsSpotName}" updated successfully!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });

            // Clear form fields
            setTouristsSpotName('');
            setCountryName('');
            setLocation('');
            setShortDescription('');
            setAverageCost('');
            setSeasonality('');
            setTravelTime('');
            setTotalVisitorsPerYear('');
        } catch (error) {
            console.error('Error updating tourist spot:', error);
        }
    };

    return (
        <div className="lg:mx-[290px] lg:my-[150px] md:mx-16">
            <Toaster position="top-right" reverseOrder={false} autoClose={300} hideProgressBar={false} closeOnClick={true} pauseOnHover={true} draggable={true} />
            <h1 className="text-center text-red-600 lg:text-5xl md:text-2xl text-xl font-bold my-10">Update Tourist Spot</h1>
            <div className="bg-base-200">
                <div className="">
                    <div className="card w-full">
                        <form onSubmit={handleUpdate} className="card-body">
                            <div className="lg:flex gap-24 lg:my-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Tourist Spot Name</span>
                                    </label>
                                    <input
                                        value={touristsSpotName}
                                        onChange={(e) => setTouristsSpotName(e.target.value)}
                                        className="input input-bordered lg:w-[575px] md:w-[575px]"
                                        type="text"
                                        placeholder="Enter the tourist spot name"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Country Name</span>
                                    </label>
                                    <input
                                        value={countryName}
                                        onChange={(e) => setCountryName(e.target.value)}
                                        className="input input-bordered lg:w-[575px] md:w-[575px]"
                                        type="text"
                                        placeholder="Enter the country name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="lg:flex gap-24 lg:my-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Location</span>
                                    </label>
                                    <input
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        className="input input-bordered lg:w-[575px] md:w-[575px]"
                                        type="text"
                                        placeholder="Enter the location"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Short Description</span>
                                    </label>
                                    <input
                                        value={shortDescription}
                                        onChange={(e) => setShortDescription(e.target.value)}
                                        className="input input-bordered lg:w-[575px] md:w-[575px]"
                                        type="text"
                                        placeholder="Enter a short description"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="lg:flex gap-24 lg:my-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Average Cost</span>
                                    </label>
                                    <input
                                        value={averageCost}
                                        onChange={(e) => setAverageCost(e.target.value)}
                                        className="input input-bordered lg:w-[575px] md:w-[575px]"
                                        type="text"
                                        placeholder="Enter the average cost"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seasonality</span>
                                    </label>
                                    <input
                                        value={seasonality}
                                        onChange={(e) => setSeasonality(e.target.value)}
                                        className="input input-bordered lg:w-[575px] md:w-[575px]"
                                        type="text"
                                        placeholder="Enter the seasonality"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="lg:flex gap-24 lg:my-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Travel Time</span>
                                    </label>
                                    <input
                                        value={travelTime}
                                        onChange={(e) => setTravelTime(e.target.value)}
                                        className="input input-bordered lg:w-[575px] md:w-[575px]"
                                        type="text"
                                        placeholder="Enter the travel time"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Total Visitors Per Year</span>
                                    </label>
                                    <input
                                        value={totalVisitorsPerYear}
                                        onChange={(e) => setTotalVisitorsPerYear(e.target.value)}
                                        className="input input-bordered lg:w-[575px] md:w-[575px]"
                                        type="text"
                                        placeholder="Enter total visitors per year"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-control my-16">
                                <button className="btn btn-primary" type="submit">
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateTouristSpot;
