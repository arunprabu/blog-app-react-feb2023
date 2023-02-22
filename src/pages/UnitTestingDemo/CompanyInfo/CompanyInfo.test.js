import { render, screen } from "@testing-library/react";
import CompanyInfo from "./CompanyInfo";

describe("CompanyInfo", () => {
  
  it('should have Cognizant as company name', () => {
    render(<CompanyInfo />);

    const companyNameElement = screen.getByTestId('companyName')
    console.log(companyNameElement.textContent);

    // Assert (must)
    expect(companyNameElement.textContent).toBe("Company Name: Cognizant");
  });
  

});