import React from "react";
import { BsBarChartSteps } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
      <div className="container ">
        <a href="#" className="navbar-brand ">
          <i className="bi bi-clock-fill"> Landing</i>
        </a>

        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <BsBarChartSteps className="text-white" />
          {/* <span className="navbar-toggler-icon text-white"></span> */}
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#learn" className="nav-link text-white">
                What you'll learn
              </a>
            </li>
            <li className="nav-item">
              <a href="#questions" className="nav-link text-white">
                Questions
              </a>
            </li>
            <li className="nav-item">
              <a href="#instructors" className="nav-link text-white">
                Instructors
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
