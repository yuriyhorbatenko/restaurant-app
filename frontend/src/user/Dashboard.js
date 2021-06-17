import React from 'react';
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DashboardNav from "../components/DashboardNav.js";
import ConnectNav from "../components/ConnectNav.js";
import { userRestaurants, deleteRestaurant } from "../actions/restaurant.js";
import SmallCard from "../restaurants/forms/SmallCard.js";
import "../styling/Dashboard.css"

const DashboardUser = () => {
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
      <ConnectNav />
      <DashboardNav />
      
      <div className="container-fluid">
        
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <div className="p-3 pointer">
              <i className="fa fa-cutlery" aria-hidden="true"></i>
              <h4>Your Restaurants</h4>
              <Link to="/dashboard/new" className="btn btn-warning">+ Add New</Link>
            </div>
          </div>

          <div className="dashboard-container">
            <div className="dashboard-box">
              {restaurants.map((r) => (<SmallCard key={r._id} r={r} owner={true} handleRestaurantDelete={handleRestaurantDelete}/>))}
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default DashboardUser;

