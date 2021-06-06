import { Link } from "react-router-dom";

const DashboardNav = () => {
  const active = window.location.pathname;
 
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          className={`nav-link ${active === "/dashboard" && "active"}`}
          to="/dashboard"
        >
          Your Restaurants
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link ${active === "/dashboard/new" && "active"}`}
          to="/dashboard/new"
        >
          Add Restaurant
        </Link>
      </li>
    </ul>
  );
};

export default DashboardNav;
