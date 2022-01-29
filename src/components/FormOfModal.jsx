import React from "react";

const FormOfModal = ({ formName, id }) => {
  return (
    <>
      <form>
        <div className="mg-3">
          <label htmlFor={id} className="col-form-label">
            {formName}
          </label>
          <input type="text" className="form-control" id={id} />
        </div>
      </form>
    </>
  );
};

export default FormOfModal;
