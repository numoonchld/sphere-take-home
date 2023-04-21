import React, { FC } from "react";
import { Link } from "react-router-dom";

const Sidebar: FC = () => {
  return (
    <>
      <section className="sidebar">
        <i className="fa-solid fa-circle fa-5x"></i>
        <div className="nav-button-group">
          <Link to={"/"}>
            <button className="nav-button --active">
              <i className="fa-solid fa-house"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;Available
            </button>
          </Link>
          <Link to={"/"}>
            <button className="nav-button">
              <i className="fa-solid fa-box"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;Claims
            </button>
          </Link>
          <Link to={"/creator"}>
            <button className="nav-button">
              <i className="fa-solid fa-pen"></i>&nbsp;&nbsp;&nbsp;&nbsp;Creator
            </button>
          </Link>
          <Link to={"/"}>
            <button className="nav-button">
              <i className="fa-solid fa-sliders"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;Settings
            </button>
          </Link>
        </div>
        <hr />

        <div className="sidebar-detail-group">
          <h4>Discord #1000</h4>
          <p>arnold@example.com</p>
          <div className="sidebar-socials">
            <i className="fa-brands fa-twitter fa-2x"></i>
            <i className="fa-brands fa-discord fa-2x"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
