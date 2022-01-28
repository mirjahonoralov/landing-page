import React from "react";
import Question from "./Question";
import { QuestionsData } from "./QuestionsData";

const Questions = () => {
  return (
    <div id="questions" className="p-3 p-sm-5">
      <div className="container">
        <h2 className="text-center mb-4">Frequently Asked Qestions</h2>
        <div className="accordion" id="questions">
          {QuestionsData.map((item, index) => {
            return <Question key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Questions;
