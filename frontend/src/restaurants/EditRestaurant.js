import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { read, updateRestaurant } from "../actions/restaurant.js";
import ConnectNav from "../components/ConnectNav.js";
import EditRestaurantForm from "./forms/EditRestaurantForm.js";

const EditRestaurant = ({match}) => {
  // redux
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;
  const history = useHistory();
  // state
  const [values, setValues] = useState({
    name: "",
    cuisine: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    comment: "",
    rating: ""
  });
 
  const { name, cuisine, street, city, state, zip, comment, rating } = values;

  useEffect(() => {
    loadUserRestaurant();
  }, []);

  const loadUserRestaurant = async () => {
    let res = await read(match.params.restaurantId);
    setValues({ ...values, ...res.data });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let restaurantData = new FormData();
    restaurantData.append("name", name);
    restaurantData.append("cuisine", cuisine);
    restaurantData.append("street", street);
    restaurantData.append("city", city);
    restaurantData.append("state", state);
    restaurantData.append("zip", zip);
    restaurantData.append("comment", comment);
    restaurantData.append("rating", rating);


    try {
      let res = await updateRestaurant(token, restaurantData, match.params.restaurantId);
      console.log("RESTAURANT UPDATE RES", res);
      toast.success(`${res.data.name} is updated`);
      setTimeout(() => {window.location.reload()}, 5000);
      history.push("/dashboard");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
     <ConnectNav />

      <div className="col-md-6 offset-md-3 text-center edit-restaurant">
        <div className="p-3 pointer">
          <i className="fa fa-cutlery" aria-hidden="true"></i>
          <h4>Edit Restaurant</h4>
        </div>
      </div>

      <div className="restaurant-container">
        <div className="restaurant-box">
            <div className="container">
              <EditRestaurantForm
              values={values}
              setValues={setValues}
              handleChange={handleChange}
              handleSubmit={handleSubmit}/>
            </div>
        </div>
      </div>
    </>
  );
};

export default EditRestaurant;
