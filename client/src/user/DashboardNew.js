import DashboardNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";
import NewRestaurant from "../restaurants/NewRestaurant";

const DashboardNew = () => {
  return (
    <>
      <ConnectNav />
      <DashboardNav />

      <div className="col-md-6 offset-md-3 text-center">
        <div className="p-3 pointer">
          <i className="fa fa-cutlery" aria-hidden="true"></i>
          <h4>New Restaurant</h4>
        </div>
      </div>

      <div className="restaurant-container">
        <div className="restaurant-box">
          <NewRestaurant />
        </div>
      </div>
    </>
  );
};

export default DashboardNew;
