import React from "react";
import FormOfModal from "./FormOfModal";

const Modal = () => {
  return (
    <div
      class="modal fade"
      id="enroll"
      tabindex="-1"
      aria-labelledby="enrollLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="enrollLabel">
              Input
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p className="lead">
              Fill out this form and we will get back to you
            </p>

            <FormOfModal formName="First Name" id="fName" />
            <FormOfModal formName="Last Name" id="lName" />
            <FormOfModal formName="Email" id="email" />
            <FormOfModal formName="Phone Number" id="phoneNumber" />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
