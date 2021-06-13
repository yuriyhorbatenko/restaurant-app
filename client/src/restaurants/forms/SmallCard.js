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
            <Rate disabled defaultValue={r.grades} />
            </div>
          </div>

          <div className="review-description">{r.cuisine} cuisine</div>

          <div className="review-description">{r.address} {r.borough}</div>

          <div className="review-description">
            The device has a clean design, and the metal housing feels sturdy in my hands. Soft rounded corners make it a pleasure to look at.
          </div>

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
    // <>
    //   <div className="card mb-3">
    //     <div className="row no-gutters">
    //       <div className="col-md-8">
    //         <div className="card-body">
    //           <div className="d-flex justify-content-between h4">
    //           <p className="card-text">Name: {r.name}</p>
    //           <p className="card-text">Address: {r.address}</p>
    //           <p className="card-text">Borough: {r.borough}</p>
    //           <p className="card-text">Cuisine: {r.cuisine}</p>
    //           <p className="card-text">Stars: {r.grades}</p>
              

    //             {!owner && (
    //               <p className="card-text">Posted:{r.postedBy.firstName + " " + r.postedBy.lastName}</p>
    //             )}
    //             {owner && (
    //               <>
    //                 <Link to={`/restaurant/edit/${r._id}`}><EditOutlined className="text-warning" /></Link>
    //                 <DeleteOutlined onClick={() => handleRestaurantDelete(r._id)} className="text-danger" />
    //               </>
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
