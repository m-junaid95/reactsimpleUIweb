import React from "react";
import web from "../src/images/img2.svg";
import { NavLink } from "react-router-dom";
import "./Commom.css";

const Commom = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name" style={{ color: "#c79585" }}>
                      {" "}
                      MuhammadJunaid{" "}
                    </strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developer making websites
                  </h2>
                  <div className="mt-3">
                    <NavLink
                      to={props.visit}
                      className="get-started-btnn"
                    >
                      {props.btname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    style={{ border: "1px solid #c79585", borderRadius: "50%" }}
                    alt="Commom img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Commom;
