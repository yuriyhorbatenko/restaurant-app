import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RestOutlined } from "@ant-design/icons";
import { read, updateRestaurant } from "../actions/restaurant";
import RestaurantEditForm from "./forms/RestaurantEditForm";

const EditRestaurant = ({match}) => {
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
    restaurantData.append("address", address);
    restaurantData.append("borough", borough);
    restaurantData.append("cuisine", cuisine);
    restaurantData.append("grades", grades);
    restaurantData.append("name", name);


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
                <RestaurantEditForm
                values={values}
                setValues={setValues}
                handleChange={handleChange}
                handleSubmit={handleSubmit}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditRestaurant;
