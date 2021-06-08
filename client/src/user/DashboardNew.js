import DashboardNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";
import NewRestaurant from "../restaurants/NewRestaurant";

const DashboardNew = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5">
        <ConnectNav />
      </div>

      <div className="container-fluid p-4">
        <DashboardNav />
      </div>

      <div className="container">
        <NewRestaurant />
      </div>
    </>
  );
};

export default DashboardNew;
