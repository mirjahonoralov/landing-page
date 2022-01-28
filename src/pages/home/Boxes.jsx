import React from "react";
import { AiOutlineLaptop } from "react-icons/ai";
import { BsFillPersonCheckFill, BsPeopleFill } from "react-icons/bs";

const Boxes = () => {
  return (
    <section className="p-sm-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-md mt-3 mt-md-0">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <AiOutlineLaptop />
                </div>
                <h3>Virtual</h3>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dignissimos, iusto!
                </p>
                <a href="#" className="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md mt-3 mt-md-0">
            <div className="card bg-secondary text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <BsFillPersonCheckFill />
                </div>
                <h3>Hybrid</h3>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dignissimos, iusto!
                </p>
                <a href="#" className="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md mt-3 mt-md-0">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <BsPeopleFill />
                </div>
                <h3>In person</h3>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dignissimos, iusto!
                </p>
                <a href="#" className="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boxes;
