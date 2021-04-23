import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    city: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My Name is ${data.fullname}, My Mobile number is ${data.phone},My email is ${data.email},My city is  ${data.city}`
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row ">
          <div className="col-md-6 col-1o mx-auto">
            <form
              onSubmit={formSubmit}
              class="row g-3 needs-validation"
              novalidate
            >
              <div class="col-md-4">
                <label for="validationCustom01" class="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  placeholder="Enter your name"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-4">
                <label for="validationCustom02" class="form-label">
                  Phone
                </label>
                <input
                  type="Text"
                  class="form-control"
                  placeholder="Mobile Number"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  id="validationCustom02"
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-4">
                <label for="validationCustomUsername" class="form-label">
                  Username
                </label>
                <div class="input-group has-validation">
                  <span class="input-group-text" id="inputGroupPrepend">
                    @
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="name@example.com"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>
              <div class="col-md-6">
                <label for="validationCustom03" class="form-label">
                  City
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="city"
                  value={data.city}
                  onChange={InputEvent}
                  id="validationCustom03"
                  required
                />
                <div class="invalid-feedback">Please provide a valid city.</div>
              </div>
              <div class="col-md-3">
                <label for="validationCustom04" class="form-label">
                  State
                </label>
                <select class="form-select" id="validationCustom04" required>
                  <option selected disabled value="">
                    Choose...
                  </option>
                  <option>Delhi</option>
                </select>
                <div class="invalid-feedback">Please select a valid state.</div>
              </div>
              <div class="col-md-3">
                <label for="validationCustom05" class="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                />
                <div class="invalid-feedback">Please provide a valid zip.</div>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label class="form-check-label" for="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div class="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
