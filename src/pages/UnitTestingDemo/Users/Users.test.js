import {  render, screen } from "@testing-library/react";
import Users from "./Users";

describe('Users', () => {
  // the following is NOT RECOMMENDED
  /* it("fetches users array via rest api call", async () => {
    render(<Users />);
    const userNameElement = await screen.findByText("Ervin Howell");
    expect(userNameElement).toBeInTheDocument();
  }); */

  // 3 DISADVANTAGES of the above approach:
  /*
    1. Time consuming
    2. Data Consistency (no guarantee for sample data like Ervin Howell to be available)
    3. Availability of REST API is also a concern (may be down or still in dev)
  */

 // Solution: mocking Rest api
})
