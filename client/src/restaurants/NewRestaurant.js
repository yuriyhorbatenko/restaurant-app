import { useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createRestaurant } from "../actions/restaurant";
import NewRestaurantForm from "./forms/NewRestaurantForm";

const NewRestaurant = () => {
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

    console.log([...restaurantData]);

    try {
      let res = await createRestaurant(token, restaurantData);
      console.log("RESTAURANT CREATE RES", res);
        toast.success("New restaurant is posted");
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
      <div className="container">
          <NewRestaurantForm
          values={values}
          setValues={setValues}
          handleChange={handleChange}
          handleSubmit={handleSubmit}/>
      </div>
    </>
  );
};

export default NewRestaurant;
