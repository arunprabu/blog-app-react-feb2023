import React, { useState } from 'react'

const ContactForm = () => {
  const [isSaved, setIsSaved] = useState(false);

  const [formState, setFormState] = useState({
    firstName: "",
    phone: "",
  });

  const handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    // TODO: submit the above form data to the rest api
    // REST API url: https://jsonplaceholder.typicode.com/users
  }

  return (
    <div className="row">
      <h4>ContactForm | Testing Form in React</h4>
      <form className="col-md-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameInput">Enter Name:</label>
          {/* on change is pending -- we will do it tomorrow */}
          <input
            type="text"
            id="nameInput"
            className="form-control"
            name="firstName"
            value={formState.firstName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="phoneInput">Enter Phone:</label>
          <input
            type="number"
            id="phoneInput"
            className="form-control"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mt-3">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={formState.firstName === ""}
          >
            Submit
          </button>
          {isSaved ? (
            <div className="alert alert-success">Saved Successfully</div>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactForm