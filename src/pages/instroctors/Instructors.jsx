import React from "react";
import Card from "./Card";
import { InstructorsData } from "./InstructorsData";

const Instructors = () => {
  return (
    <section id="instructors" className="p-3 p-sm-5 bg-primary">
      <div className="container">
        <h2 className="text-center text-white">Our Instructors</h2>
        <p className="lead text-center text-white mb-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          eos cupiditate nam veritatis soluta commodi numquam libero porro! Ipsa
          eaque quasi cum necessitatibus at natus consequuntur dicta explicabo
          eum animi.
        </p>
        <div className="row g-4">
          {InstructorsData.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
