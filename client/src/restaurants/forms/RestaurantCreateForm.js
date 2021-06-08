import { DatePicker, Select } from "antd";

const { Option } = Select;

const RestaurantCreateForm = ({
  handleChange,
  handleImageChange,
  handleSubmit,
  location,
  setLocation,
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">

        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Title"
          className="form-control m-2"
          value={title}
        />

        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Content"
          className="form-control m-2"
          value={content}
        />

      </div>
      <button className="btn btn-outline-primary m-2">Save</button>
    </form>
  );
};

export default RestaurantCreateForm;
