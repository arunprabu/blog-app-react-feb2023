import { fireEvent, render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe('ContactForm', () => { 

  it('has proper contact form', () => {
    render(<ContactForm />);
    const nameInput = screen.getByLabelText("Enter Name:");
    const phoneInput = screen.getByLabelText("Enter Phone:");
    const submitBtn = screen.getByRole("button");

    expect(nameInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();

    // let's also check whether the nameInput has attribute type='text'
    expect(nameInput).toHaveAttribute('type', 'text');
    // let's also check whether the phoneInput has attribute type='number'
    expect(phoneInput).toHaveAttribute("type", "number");
  });

  // it has proper validations in form 
  it('has the submit button in disabled state when first name is empty', () => {
    render(<ContactForm />);
    const nameInput = screen.getByLabelText("Enter Name:");
    // not filling the form field
    fireEvent.change(nameInput, { target: { value: "" } });

    const submitBtn = screen.getByRole("button");
    expect(submitBtn).toHaveAttribute("disabled");

    // filling the form field
    fireEvent.change(nameInput, { target: { value: "arun" } });
    expect(submitBtn).not.toHaveAttribute("disabled");
  });

  // TODO: trigger the submit button click and check whether success msg is present in UI or not

});
