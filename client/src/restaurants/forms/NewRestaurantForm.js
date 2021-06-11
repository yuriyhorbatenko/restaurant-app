import { Select } from "antd";


const { Option } = Select;

const NewRestaurantForm = ({
  values,
  setValues,
  handleChange,
  handleSubmit,
}) => {
  const { name, address, borough, cuisine } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">

        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name"
          className="form-control m-2"
          value={name}
        />

        <input
          type="text"
          name="address"
          onChange={handleChange}
          placeholder="Address"
          className="form-control m-2"
          value={address}
        />

        <input
          type="text"
          name="borough"
          onChange={handleChange}
          placeholder="Borough"
          className="form-control m-2"
          value={borough}
        />

        <input
          type="text"
          name="cuisine"
          onChange={handleChange}
          placeholder="Cuisine"
          className="form-control m-2"
          value={cuisine}
        />

        <Select
          onChange={(value) => setValues({ ...values, grades: value })}
          className="w-100 m-2"
          size="large"
          placeholder="Grade"
        >
          <Option key={1}>{1}</Option>
          <Option key={2}>{2}</Option>
          <Option key={3}>{3}</Option>
          <Option key={4}>{4}</Option>
          <Option key={5}>{5}</Option>
        </Select>

      
      </div>
      <button className="btn btn-outline-primary m-2" >Save</button>
    </form>
  );
};

export default NewRestaurantForm;
