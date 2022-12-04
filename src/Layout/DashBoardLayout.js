import React from "react";
import { Link } from "react-router-dom";
import CustomerBooking from "../Pages/DashBoard/CustomerBooking/CustomerBooking";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashBoardLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <CustomerBooking></CustomerBooking>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu space-y-3 p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to={`/dashboard`} className="font-bold">Book</Link>
            </li>
            <li>
              <Link to={`/bookinglist`} className="font-bold">Booking List</Link>
            </li>
            <li>
              <Link to={`/review`} className="font-bold">Add A Review</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashBoardLayout;
