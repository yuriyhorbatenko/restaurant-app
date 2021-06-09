import { useState, useEffect } from "react";
import DashboardNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RestOutlined } from "@ant-design/icons";
import { userRestaurants, deleteRestaurant } from "../actions/restaurant";
import { toast } from "react-toastify";
import SmallCard from "../restaurants/forms/SmallCard";

const DashboardSeller = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    loadUserRestaurants();
  }, []);

  const loadUserRestaurants = async () => {
    let { data } = await userRestaurants(auth.token);
    setRestaurants(data);
  };

  const handleRestaurantDelete = async (restaurantId) => {
    console.log(restaurantId, "handleRestaurantDelete")
    if (!window.confirm("Are you sure?")) return;
    deleteRestaurant(auth.token, restaurantId).then((res) => {
      toast.success("Restaurant Deleted");
      loadUserRestaurants();
    });
  };


  return (
    <>
      <div className="container-fluid bg-secondary p-5">
        <ConnectNav />
      </div>

      <div className="container-fluid p-4">
        <DashboardNav />
      </div>

      <div className="container-fluid">
        
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <div className="p-3 pointer">
              <RestOutlined  className="h1" />
              <h4>Your Restaurants</h4>
              <p className="lead">Restaurants you have added</p>
              <Link to="/dashboard/new" className="btn btn-primary">+ Add New</Link>
            </div>
          </div>

          <div className="row">
            {restaurants.map((r) => (
              <SmallCard
              key={r._id}
              r={r}
              owner={true}
              handleRestaurantDelete={handleRestaurantDelete}/>
            ))}
          </div>
        </div>
        
        {/* <pre>{JSON.stringify(restaurants, null, 4)}</pre> */}
      </div>
    </>
  );
};

export default DashboardSeller;

