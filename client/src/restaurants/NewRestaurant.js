import { useState } from "react";
import { toast } from "react-toastify";
import { DatePicker, Select } from "antd";
import { useSelector } from "react-redux";
import { createRestaurant } from "../actions/restaurant";
import RestaurantCreateForm from "./forms/RestaurantCreateForm";

const { Option } = Select;

const NewRestaurant = () => {
  // redux
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;
  // state
  const [values, setValues] = useState({
    address: "",
    borough: "",
    cuisine: "",
    grades: "",
    name: ""
  });
 
  const [location, setLocation] = useState("");
  const { address, borough, cuisine, grades, name } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(values);

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
        setTimeout(() => {window.location.reload()}, 1000);
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
      <div className="container-fluid bg-secondary p-5 text-center">
        <h2>Add Restaurant</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <br />
            <RestaurantCreateForm
              values={values}
              setValues={setValues}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              // location={location}
              // setLocation={setLocation}
            />
          </div>
          <div className="col-md-2">
            <pre>{JSON.stringify(values, null, 4)}</pre>
            {JSON.stringify(location)}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewRestaurant;
