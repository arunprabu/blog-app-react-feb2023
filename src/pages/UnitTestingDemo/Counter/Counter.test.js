import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe('Counter', () => { 

  it('has counter with initial value 0', () => {
    render(<Counter />);
    const counterElement = screen.getByTestId("tickerValue");
    expect(counterElement.textContent).toBe('0');
  });

  it('has properly working increment button', () => {
    render(<Counter />);

    // fetching initial value
    const counterElement = screen.getByTestId("tickerValue");
    expect(counterElement.textContent).toBe("0");

    // find the increment button
    const incrementBtn = screen.getByTestId("incrementBtn");

    // trigger click event thru js 
    fireEvent.click(incrementBtn);
    // fetch the counter value again -- find whether it is incremented or not
    expect(counterElement.textContent).toBe("1");

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(counterElement.textContent).toBe("3");
  });

  // TODO: write test for properly working decrement button
  // TODO: has counter with max value of 10 upon increment and min value of 0 upon decrement
  

  
})