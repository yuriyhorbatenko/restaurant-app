import React from 'react';
import { useState, useEffect } from "react";
import { allRestaurants } from "../actions/restaurant.js";
import SmallCard from "./forms/SmallCard.js";
import "../styling/Home.css"

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    loadAllrestaurants();
  }, []);

  const loadAllrestaurants = async () => {
    let res = await allRestaurants();
    setRestaurants(res.data);
  };

  return (
    <>
      <div className="home-container">
        <div className="home-box">
            {restaurants.map((r) => (<SmallCard key={r._id} r={r} />))}
        </div>
      </div>
    </>
  );
};

export default Home;
