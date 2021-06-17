import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "antd/dist/antd.css";
import "./index.css"

import PrivateRoute from "./components/PrivateRoute.js";
import TopNav from "./components/TopNav.js";

//components
import Home from "./restaurants/Home.js";
import Login from "./auth/Login.js";
import Register from "./auth/Register.js";
import Dashboard from "./user/Dashboard.js";
import DashboardNew from "./user/DashboardNew.js";
import EditRestaurant from "./restaurants/EditRestaurant.js";


function App() {
  return ( 
    <BrowserRouter>
      <TopNav />
      <ToastContainer
      position="top-center"
      transition={Slide}
      limit={2}
      closeOnClick
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/dashboard/new" component={DashboardNew} />
        <PrivateRoute exact path="/restaurant/edit/:restaurantId" component={EditRestaurant} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
