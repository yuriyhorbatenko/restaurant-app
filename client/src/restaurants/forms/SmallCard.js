import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Rate } from 'antd';
import moment from "moment";
import "../../styling/SmallCard.css";

const SmallCard = ({r, handleRestaurantDelete = (f) =>
  f, 
  owner = false
}) => {
  return (
    <>
      <div className="reviews-list">
        <div className="review-card">

          <div className="review-header">
            <div className="name-tag">{r.name}</div>

            <div className="rating">
            <Rate disabled defaultValue={r.rating} />
            </div>
          </div>

          <div className="review-description">{r.street}, {r.city}, {r.state} {r.zip}</div>
          <div className="review-description">{r.cuisine} cuisine</div>
          <div className="review-description">"{r.comment}"</div>

          <div className="review-details">
            {!owner && (
              <>
                <div className="details-div">
                  <p className="card-text">{r.postedBy.firstName + " " + r.postedBy.lastName}</p>
                  <p className="card-text">{moment(r.updatedAt).fromNow()}</p>
                </div>
              </>
            )}
            {owner && (
              <>
                <div className="details-div">
                  <Link className="edit-text" to={`/restaurant/edit/${r._id}`}><EditOutlined className="text-warning" /></Link>
                  <div className="edit-text"><DeleteOutlined onClick={() => handleRestaurantDelete(r._id)} className="text-danger" /></div>
                </div>
              </>
            )}
          </div>

        </div>
      </div>
  </>

  );
};

export default SmallCard;

