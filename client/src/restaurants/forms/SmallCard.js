// import { diffDays } from "../../actions/hotel";
import { useHistory, Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const SmallCard = ({
  h,
  handleRestaurantsDelete = (f) => f,
  owner = false,
  showViewMoreButton = true,
}) => {
  const history = useHistory();
  return (
    <>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="card-body">
          
              <div className="d-flex justify-content-between h4">
                {showViewMoreButton && (
                  <button
                    onClick={() => history.push(`/restaurant/${h._id}`)}
                    className="btn btn-primary"
                  >
                    Show more
                  </button>
                )}
                {owner && (
                  <>
                    <Link to={`/hotel/edit/${h._id}`}>
                      <EditOutlined className="text-warning" />
                    </Link>
                    <DeleteOutlined
                      onClick={() => handleRestaurantsDelete(h._id)}
                      className="text-danger"
                    />
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
