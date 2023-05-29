// import './WorkCardStyle.css'
import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = props => {
  return (
    <>
    <div>
    <div className="project-card">
      <img src={props.imgsrc} alt="" />
      <h2 className="project-title">
        {props.title}
      </h2>
      <div className="pro-details">
        <p>
          {props.text}
        </p>
        <div className="pro-btns">
          <NavLink className="btn" to={props.view}>
            {props.viewText}
          </NavLink>
          <NavLink className="btn" to="/about">
            {props.viewSource}
          </NavLink>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default WorkCard;
