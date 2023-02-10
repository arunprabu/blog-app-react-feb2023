import { useState } from "react";

// Fn with Arrow Fn [Recommended]
const Home = () => {
  console.log("1. Program Started");

  // component wide data
  const [fullName, setFullName] = useState("Arun"); // default state value
  const [time, setTime] = useState(new Date());

  const handleChangeFullName = (event) => {
    console.log(event.target.value);
    setFullName(event.target.value); // setting state
  };

  console.log("2. Program Ended");
  return (
    <div>
      <h1>Welcome to Home Page, {fullName}!</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Your Full Name"
        value={fullName}
        style={{ width: "260px" }}
        onChange={handleChangeFullName}
      />

      <p className="pt-3">Time: {time.toString()}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setTime(new Date());
        }}
      >
        Update Time
      </button>
    </div>
  );
};

export default Home;
