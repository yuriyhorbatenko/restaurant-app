import DashboardNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5">
        <ConnectNav />
      </div>

      <div className="container-fluid p-4">
        <DashboardNav />
      </div>

      <div className="container">
        <p>Show all your restaurants</p>
      </div>
    </>
  );
};

export default Dashboard;
