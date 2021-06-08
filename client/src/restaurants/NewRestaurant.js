import { useState } from "react";
import { toast } from "react-toastify";
import { Select } from "antd";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RestOutlined } from "@ant-design/icons";
import { createRestaurant } from "../actions/restaurant";
import RestaurantCreateForm from "./forms/RestaurantCreateForm";

const { Option } = Select;

const NewRestaurant = () => {
  // redux
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;
  const history = useHistory();
  // state
  const [values, setValues] = useState({
    address: "",
    borough: "",
    cuisine: "",
    grades: "",
    name: ""
  });
 
  const { address, borough, cuisine, grades, name } = values;

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    let restaurantData = new FormData();
    restaurantData.append("address", address);
    restaurantData.append("borough", borough);
    restaurantData.append("cuisine", cuisine);
    restaurantData.append("grades", grades);
    restaurantData.append("name", name);

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
    <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <div className="p-3 pointer">
            <RestOutlined  className="h1" />
            <h4>Your Restaurants</h4>
            <p className="lead">Restaurants you have added</p>
          </div>
        </div>
      
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
              <RestaurantCreateForm
                values={values}
                setValues={setValues}
                handleChange={handleChange}
                handleSubmit={handleSubmit}/>
            </div>
            <div className="col-md-2">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewRestaurant;
