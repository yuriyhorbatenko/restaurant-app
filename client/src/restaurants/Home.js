import { useState, useEffect } from "react";
import { allRestaurants } from "../actions/restaurant";
import SmallCard from "./forms/SmallCard";

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
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>All Restaurants</h1>
      </div>
      <div className="col">
        <br />
      </div>
      <div className="container-fluid">
        <br />
        {/* <pre>{JSON.stringify(restaurants, null, 4)}</pre> */}
        {restaurants.map((r) => (
          <SmallCard key={r._id} r={r} />
        ))}
      </div>
    </>
  );
};

export default Home;
