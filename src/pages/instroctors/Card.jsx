import React from "react";

const Card = ({ item }) => {
  return (
    <div className="col-md-6 col-lg-3 p-0 p-sm-3">
      <div className="card bg-light">
        <div className="card-body text-center">
          <img src={item.img} alt="no" className="rounded-circle mb-3" />
          <h3 className="card-title mb-3">{item.name}</h3>
          <p className="card-text">{item.text}</p>
          <a href="#">
            <i className="bi bi-twitter text-dark mx-2"></i>
          </a>
          <a href="#">
            <i className="bi bi-facebook text-dark mx-2"></i>
          </a>
          <a href="#">
            <i className="bi bi-linkedin text-dark mx-2"></i>
          </a>
          <a href="#">
            <i className="bi bi-instagram text-dark mx-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
