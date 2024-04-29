import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const AddTouristsSpot = () => {
  const [spotForm, setSpotForm] = useState({
    image: '',
    tourists_spot_name: '',
    country_name: '',
    location: '',
    short_description: '',
    average_cost: '',
    seasonality: '',
    travel_time: '',
    total_visitors_per_year: '',
    user_email: '',
    user_name: '',
  });

  const handleSpot = (event) => {
    event.preventDefault();

    const form = event.target;
    const image = form.image.value;
    const tourists_spot_name = form.tourists_spot_name.value;
    const country_name = form.country_name.value;
    const location = form.location.value;
    const short_description = form.short_description.value;
    const average_cost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const total_visitors_per_year = form.total_visitors_per_year.value;
    const user_email = form.user_email.value;
    const user_name = form.user_name.value;

    const newSpot = { image, tourists_spot_name, country_name, location, short_description, average_cost, seasonality, travel_time, total_visitors_per_year, user_email, user_name };

    fetch('http://localhost:5000/addspot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);

        toast.success(`Added ${newSpot.tourists_spot_name} to the Tourists Spot`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Clear the form fields
        setSpotForm({
          image: '',
          tourists_spot_name: '',
          country_name: '',
          location: '',
          short_description: '',
          average_cost: '',
          seasonality: '',
          travel_time: '',
          total_visitors_per_year: '',
          user_email: '',
          user_name: '',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('Failed to add Tourist Spot. Please try again later.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };


  return (
    <div className="lg:mx-[290px] lg:my-[180px] md:mx-16 ">
      <Toaster position="top-right" reverseOrder={false} autoClose={300} hideProgressBar={false} closeOnClick={true} pauseOnHover={true} draggable={true} />
      <div className=" bg-sky-700 rounded-xl ">
        <div className="">
          <div className="card w-full">
            <form onSubmit={handleSpot} className="card-body">
            <div className="lg:flex lg:gap-24 lg:mt-20">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">User Name</span>
                  </label>
                  <input
                    name="user_name"
                    className="input input-bordered lg:w-[575px] md:w-[575px]"
                    type="text"
                    placeholder="Enter the User Name"
                    required
                    value={spotForm.user_name}
                    onChange={(e) => setSpotForm({ ...spotForm, user_name: e.target.value })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">User Email</span>
                  </label>
                  <input
                    name="user_email"
                    className="input input-bordered lg:w-[575px] md:w-[575px]"
                    type="email"
                    placeholder="Enter the User Email"
                    required
                    value={spotForm.user_email}
                    onChange={(e) => setSpotForm({ ...spotForm, user_email: e.target.value })}
                  />
                </div>
              </div>
              <div className="lg:flex gap-24 lg:my-20">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text ">Image</span>
                  </label>
                  <input
                    name="image"
                    className="input input-bordered lg:w-[575px] md:w-[575px]"
                    type="text"
                    placeholder="Enter the Image URL"
                    required
                    value={spotForm.image}
                    onChange={(e) => setSpotForm({ ...spotForm, image: e.target.value })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Tourists Spot Name</span>
                  </label>
                  <input
                    name="tourists_spot_name"
                    className="input input-bordered lg:w-[575px] md:w-[575px]"
                    type="text"
                    placeholder="Enter the Tourists Spot Name"
                    required
                    value={spotForm.tourists_spot_name}
                    onChange={(e) => setSpotForm({ ...spotForm, tourists_spot_name: e.target.value })}
                  />
                </div>
              </div>
              <div className="lg:flex lg:gap-24">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Country Name</span>
                  </label>
                  <input
                    name="country_name"
                    className="input input-bordered lg:w-[575px] md:w-[575px]"
                    type="text"
                    placeholder="Enter the Country Name"
                    required
                    value={spotForm.country_name}
                    onChange={(e) => setSpotForm({ ...spotForm, country_name: e.target.value })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Location</span>
                  </label>
                  <input
                    name="location"
                    className="input input-bordered lg:w-[575px] md:w-[575px]"
                    type="text"
                    placeholder="Enter the Location"
                    required
                    value={spotForm.location}
                    onChange={(e) => setSpotForm({ ...spotForm, location: e.target.value })}
                  />
                </div>
              </div>
             
              <div className="lg:flex lg:gap-24 lg:mt-20">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Seasonality</span>
                  </label>
                  <input
                    name="seasonality"
                    className="input input-bordered lg:w-[575px] md:w-[575px]"
                    type="text"
                    placeholder="Enter the Seasonality"
                    required
                    value={spotForm.seasonality}
                    onChange={(e) => setSpotForm({ ...spotForm, seasonality: e.target.value })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Travel Time</span>
                  </label>
                  <input
                    name="travel_time"
                    className="input input-bordered lg:w-[575px] md:w-[575px]"
                    type="text"
                    placeholder="Enter the Travel Time"
                    required
                    value={spotForm.travel_time}
                    onChange={(e) => setSpotForm({ ...spotForm, travel_time: e.target.value })}
                  />
                </div>
              </div>
              <div className="lg:flex lg:gap-24 lg:mt-20">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Total Visitors Per Year</span>
                  </label>
                  <input
                    name="total_visitors_per_year"
                    className="input input-bordered lg:w-[575px] md:w-[575px]"
                    type="text"
                    placeholder="Enter the Total Visitors Per Year"
                    required
                    value={spotForm.total_visitors_per_year}
                    onChange={(e) => setSpotForm({ ...spotForm, total_visitors_per_year: e.target.value })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Average Cost</span>
                  </label>
                  <input
                    name="average_cost"
                    className="input input-bordered lg:w-[575px] md:w-[575px]"
                    type="text"
                    placeholder="Enter the Average Cost"
                    required
                    value={spotForm.average_cost}
                    onChange={(e) => setSpotForm({ ...spotForm, average_cost: e.target.value })}
                  />
                </div>
               
              </div>
              <div className="lg:flex lg:gap-24 lg:mt-20">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Short Description</span>
                  </label>
                  <input
                    name="short_description"
                    className="input input-bordered h-[100px] lg:w-[1240px] md:w-[575px]"
                    type="text"
                    placeholder="Enter the Short Description"
                    required
                    value={spotForm.short_description}
                    onChange={(e) => setSpotForm({ ...spotForm, short_description: e.target.value })}
                  />
                </div>
    
              </div>
            
              <div className="form-control my-16">
                <button className="btn btn-primary" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTouristsSpot;
