import React from "react";
import Cards from "./Card";
import TodayLine from "./TodayLine";

const Dashboard = () => {
  return (
    <div className="container ">
      <Cards />

      <div className=" hidden md:block">
        <TodayLine />
      </div>
    </div>
  );
};

export default Dashboard;
