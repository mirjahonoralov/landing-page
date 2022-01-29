import React, { useEffect, useRef } from "react";
// import mapboxgl from "mapbox-gl";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoibWlyamFob24iLCJhIjoiY2t5eDV5YnpqMGZhcDJubXh2MzZsdHF6dyJ9.FYo0nkOoZ4MyWKnVxvtV6Q";

const Contact = () => {
  // const mapContainer = useRef();

  // useEffect(() => {
  //   const map = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: "mapbox://styles/mapbox/streets-v11",
  //     center: [-71, 42],
  //     zoom: 8,
  //   });
  // }, []);

  return (
    <>
      <section className="p-2 p-md-5">
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-md">
              <h2 className="text-center mb-4">Contact Info</h2>
              <ul className="list-group list-group-flash lead">
                <li className="list-group-item">
                  <span className="fw-bold">Main street: </span> 50 main street
                  Boston MA
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Student phone: </span> (22)-333-333
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Enrollment Email: </span>
                  ticto@gmail.com
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Student email: </span>
                  nothing@gmail.com 123
                </li>
              </ul>
            </div>

            {/* <div className="col-md">
              <div
                id="map"
                ref={mapContainer}
                className="rounded-3"
                style={{ width: "100%", height: "100%", minHeight: "250px" }}
              ></div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="p-3 p-md-5 bg-dark text-light text-center position-relative">
        <div className="container ">
          <div className="h3">Copyright &copy; 2021 Frontend BootCamp</div>
          <a
            href="#"
            className="position-absolute"
            style={{ bottom: "15px", right: "15px" }}
          >
            <i className="bi bi-arrow-up-circle h1"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
