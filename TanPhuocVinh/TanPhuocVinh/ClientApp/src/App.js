import React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";

import Home from "./components/Home";
import Counter from "./components/Counter";
import FetchData from "./components/FetchData";

import Admin from "./components/Admin";
import Admin_Home_Carousel from "./components/Admin/Home/Carousel";

var location = window.location.pathname.split("/")[1];

export default () => (
  <div>
    {location === "admin" ? (
      <Admin>
        <Route path="/admin" component={Admin_Home_Carousel} />
      </Admin>
    ) : (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/fetch-data/:startDateIndex?" component={FetchData} />
      </Layout>
    )}
  </div>
);
