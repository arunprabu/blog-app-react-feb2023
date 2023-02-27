import { fireEvent, render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';
import CompanyInfo from "./CompanyInfo";

describe("CompanyInfo", () => {
  it("should have Cognizant as company name", () => {
    render(<CompanyInfo />);

    const companyNameElement = screen.getByTestId("companyName");
    console.log(companyNameElement.textContent);

    // Assert (must)
    expect(companyNameElement.textContent).toBe("Company Name: Cognizant");
  });

  // testing the props - must
  it("receives foundedYear prop and displays it in JSX", () => {
    // when you are testing prop, render the comp with necessary props
    render(<CompanyInfo foundedYear="2000" />);
    const foundedYearElement = screen.getByTestId("foundedYear");
    expect(foundedYearElement).toHaveTextContent("Founded Year: 2000");
  });

  // testing the prop
  it("receives foundedPlace prop and displays in JSX", () => {
    render(<CompanyInfo foundedPlace="Chennai" />);
    const foundedPlaceElement = screen.getByTestId("foundedPlace");
    expect(foundedPlaceElement).toHaveTextContent("Founded In: Chennai");
  });

  // testing inline styles
  it("has foundedYear text with color red -- inline styles", () => {
    render(<CompanyInfo foundedYear="2000" />);
    const foundedYearElement = screen.getByTestId("foundedYear");
    // recommended to use color in the same format that you entered in functionality side.
    // it can be in hexadecimal or rgb or color name
    expect(foundedYearElement).toHaveStyle("color: rgb(255, 0, 0)");
  });

  // TODO: test whether a button element has css class btn-primary
  // the button text should be 'JOIN COGNIZANT'
  // use getByRole
  // multiple expectations can be here

  // form input with placeholder
  it(`has an input with 'Enter Your Country Name' as placeholder text`, () => {
    render(<CompanyInfo />);
    expect(screen.getByPlaceholderText("Enter Your Country Name")).toBeTruthy();
    // multiple expectations
    // TODO: test whether the above element has an attribute type 'text'
  });

  // let's test the form element's initial value 
  it(`displays countryName USA by default and has Please visit Cognizant USA Website`, () => {
    render(<CompanyInfo />);
    // find the input element
    const countryNameInput = screen.getByPlaceholderText(
      "Enter Your Country Name"
    );
    // checking whether the default country is USA or not
    expect(countryNameInput.value).toBe("USA");
    expect(screen.getByTestId("visitWebsiteTxt")).toHaveTextContent(
      "Please visit Cognizant USA Website"
    );
  });

  // let's test events and state
  it(`displays countryName by default and updates UI onChange of input`, () => {
    render(<CompanyInfo />);
    // find the input element
    const countryNameInput = screen.getByPlaceholderText(
      "Enter Your Country Name"
    );
    expect(countryNameInput.value).toBe("USA");
    // now mocking the event object 
    const mockEventObj = {
      target: {
        value: 'Australia'
      }
    }
    // let's trigger the event -- onChange -- thru js
    fireEvent.change(countryNameInput, mockEventObj);
    // let's have new expectation 
    expect(countryNameInput.value).toBe("Australia");
  });

  it('has right CompanyInfo component snapshot', () => {
    // to take snapshot we need react-test-renderer // npm i react-test-renderer
    // taking a snapshot and also converting it into JSON
    // [RECOMMENDED]: Take snapshot with all possible props and also props children
    const snapshotInJson = renderer.create(<CompanyInfo foundedYear="1994" foundedPlace="Chennai" />).toJSON();
    expect(snapshotInJson).toMatchSnapshot();
  });

});