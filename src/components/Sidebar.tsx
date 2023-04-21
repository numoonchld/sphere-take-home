import React, { FC } from "react";
import { Link } from "react-router-dom";

const Sidebar: FC = () => {
  return (
    <>
      <section className="sidebar">
        <i className="fa-solid fa-circle fa-5x"></i>
        <div className="nav-button-group">
          <Link to={"/"}>
            <button className="nav-button --active">Available</button>
          </Link>
          <Link to={"/"}>
            <button className="nav-button">Claims</button>
          </Link>
          <Link to={"/creator"}>
            <button className="nav-button">Creator</button>
          </Link>
          <Link to={"/"}>
            <button className="nav-button">Settings</button>
          </Link>
        </div>
        <hr />
      </section>
    </>
  );
};

export default Sidebar;
