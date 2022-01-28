import React from "react";
import img1 from "../img/fundamentals.svg";
import img2 from "../img/physics.png";

import { BsArrowRight } from "react-icons/bs";

const Learn = () => {
  return (
    <>
      <section id="learn" className="p-3 p-md-5">
        <div className="container">
          <div className="row align-items-center justify-content-between g-3 g-md-0">
            <div className="col-md">
              <img src={img1} alt="no" className="img-fluid" />
            </div>
            <div className="col-md p-md-3 p-lg-5">
              <h2>Learn the fundamentals</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                facere necessitatibus inventore. Qui, architecto odit?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus illo accusantium, est quo facilis voluptatem fugit
                fugiat earum eos cumque eius in, facere a, sapiente eum id
                deleniti numquam velit?
              </p>
              <a href="#" className="btn btn-primary mt-3">
                Read more <BsArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" className="p-3 p-md-5 bg-dark text-light">
        <div className="container">
          <div className="row flex-row-reverse align-items-center justify-content-center justify-content-md-between g-3 g-md-0">
            <div className="col-8 col-md-5 p-3">
              <img src={img2} alt="no" className="img-fluid" />
            </div>
            <div className="col-md p-md-3 p-lg-5">
              <h2>Learn React</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                facere necessitatibus inventore. Qui, architecto odit?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus illo accusantium, est quo facilis voluptatem fugit
                fugiat earum eos cumque eius in, facere a, sapiente eum id
                deleniti numquam velit?
              </p>
              <a href="#" className="btn btn-light mt-3">
                Read more <BsArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Learn;
