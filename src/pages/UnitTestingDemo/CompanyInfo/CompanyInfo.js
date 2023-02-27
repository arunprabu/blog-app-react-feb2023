import React, { useState } from "react";

const CompanyInfo = ({ foundedYear, foundedPlace }) => {
  const [countryName, setCountryName] = useState("USA");

  return (
    <div>
      <h2>
        Company Info | Testing JSX, Props, Styles, Placeholder Text, Events,
        States and Snapshot!
      </h2>
      <h3 data-testid="companyName">Company Name: Cognizant</h3>
      <p data-testid="foundedYear" style={{ color: "#ff0000" }}>
        Founded Year: {foundedYear}
      </p>
      <p data-testid="foundedPlace">Founded In: {foundedPlace}</p>
      <hr />
      <input
        type="text"
        placeholder="Enter Your Country Name"
        className="form-control"
        style={{ width: "300px" }}
        value={countryName}
        onChange={(event) => {
          setCountryName(event.target.value);
        }}
      />
      <p data-testid="visitWebsiteTxt">
        Please visit Cognizant {countryName} Website
      </p>
    </div>
  );
};

export default CompanyInfo;
