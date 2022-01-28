import React from "react";

const Question = ({ item }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#" + item.target}
          aria-expanded="false"
        >
          {item.question}
        </button>
      </h2>
      <div
        id={item.target}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accrodion-body p-3">{item.answer}</div>
      </div>
    </div>
  );
};

export default Question;
