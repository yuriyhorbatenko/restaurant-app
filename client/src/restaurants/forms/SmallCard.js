import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const SmallCard = ({r, handleRestaurantDelete = (f) =>
  f, 
  owner = false
}) => {
  return (
    <>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="card-body">
              <div className="d-flex justify-content-between h4">
              <p className="card-text">{r.name} Name</p>
              <p className="card-text">{r.address} Address</p>
              <p className="card-text">{r.borough} Borough</p>
              <p className="card-text">{r.cuisine} Cuisine</p>
              <p className="card-text">{r.grades} Stars</p>
              

                {!owner && (
                  <p className="card-text">{r.postedBy.name}</p>
                )}
                {owner && (
                  <>
                    <Link to={`/restaurant/edit/${r._id}`}><EditOutlined className="text-warning" /></Link>
                    <DeleteOutlined onClick={() => handleRestaurantDelete(r._id)} className="text-danger" />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallCard;
