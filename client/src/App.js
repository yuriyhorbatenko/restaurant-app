import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "antd/dist/antd.css"

import PrivateRoute from "./components/PrivateRoute";
import TopNav from "./components/TopNav";

//components
import Home from "./restaurants/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./user/Dashboard";
import DashboardNew from "./user/DashboardNew";


function App() {
  return ( 
    <BrowserRouter>
      <TopNav />
      <ToastContainer
      position="top-center"
      transition={Slide}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/dashboard/new" component={DashboardNew} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
