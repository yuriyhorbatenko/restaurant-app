import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "../styling/TopNav.css";

const TopNav = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector ((state) => ({...state}));
  const history = useHistory();

  const logout = () =>  {
    dispatch({
      type: "LOGOUT",
      payload: null
    });
    window.localStorage.removeItem("auth");
    history.push("/login");
  };
  
  return (
      <div className="navbar-main">
        <div className="navbar-left-side">
          <Link className="nav-link nav-text" to="/">
            Home
          </Link>

          {auth !== null && (
            <Link className="nav-link nav-text" to="/dashboard">
              Dashboard
            </Link>
          )}
        </div>

        <div className="navbar-right-side">
          {auth !== null && (
            <a className="nav-link nav-text" onClick={logout}>
              Logout
            </a>
          )}

          {auth == null && (
            <>
              <Link className="nav-link nav-text" to="/login">
                Login
              </Link>
              <Link className="nav-link nav-text" to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
  );
};

export default TopNav;
