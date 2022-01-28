import React from "react";
import showCaseImg from "../../img/showcase.svg";

const ShowCase = () => {
  return (
    <>
      <section
        className="bg-dark text-light 
      px-2 py-5 p-md-5 p-lg-0 pt-lg-5
      text-center text-sm-start mt-4"
      >
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-center ">
            <div>
              <h1>
                Become a <span className="text-warning">Web Developer</span>
              </h1>
              <p className="lead my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                nesciunt cupiditate dolore itaque, ad sit repellat repellendus
                non officiis velit.
              </p>
              <button className="btn btn-primary btn-lg">
                Start the Enrollment
              </button>
            </div>
            <img
              className="img-fluid w-50 d-none d-sm-block"
              src={showCaseImg}
              alt="no"
            />
          </div>
        </div>
      </section>
      <section className="bg-primary text-light py-4 p-md-5">
        <div className="container">
          <div className="row align-items-center justify-content-between text-center">
            <h3 className="col mb-3 mb-md-0 text-md-start">
              Sign Up for Our Newsletter
            </h3>
            <form className="btn-group col-lg-5 col-md-6 col-12">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
              />
              <button
                className="btn btn-dark btn-small btn-md-lg"
                type="button"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowCase;
