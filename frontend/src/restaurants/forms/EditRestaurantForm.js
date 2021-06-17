import React from 'react';
import { Input, Rate } from "antd";

const { TextArea } = Input;

const EditRestaurantForm = ({
  values,
  setValues,
  handleChange,
  handleSubmit,
}) => {
  const { name, cuisine, street, city, state, zip, comment, rating} = values;

  return (
    <form onSubmit={handleSubmit}>

      <div className="row">
        <div className="col-6">
          <Input 
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Name"
            className="form-control m-2"
            value={name}
          />
        </div>
        <div className="col-6">
            <Input 
            type="text"
            name="cuisine"
            onChange={handleChange}
            placeholder="Cuisine"
            className="form-control m-2"
            value={cuisine}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
        <Input 
            type="text"
            name="street"
            onChange={handleChange}
            placeholder="Street address"
            className="form-control m-2"
            value={street}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <Input 
            type="text"
            name="city"
            onChange={handleChange}
            placeholder="City"
            className="form-control m-2"
            value={city}
          />
        </div>
        <div className="col-3">
          <Input 
            type="text"
            name="state"
            onChange={handleChange}
            placeholder="State"
            className="form-control m-2"
            value={state}
          />
        </div>
        <div className="col-3">
          <Input 
            type="text"
            name="zip"
            onChange={handleChange}
            placeholder="Zip"
            className="form-control m-2"
            value={zip}
          />
        </div>
      </div>

      <div className="row">
        <div className="col d-flex justify-content-center">
          <Rate style={{ fontSize: 30 }} defaultValue={rating} onChange={(value)  => setValues({ ...values, rating: value })}/>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <TextArea 
            type="text"
            name="comment"
            rows={3}
            onChange={handleChange}
            placeholder="comment"
            className="form-control m-2"
            value={comment}
          />
        </div>
      </div>

      <div className="row">
        <div className="col d-flex justify-content-center">
          <button className="btn btn-warning" >Save</button>
        </div>
      </div>

    </form>
  );
};

export default EditRestaurantForm;
