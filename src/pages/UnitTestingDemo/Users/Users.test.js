import {  render, screen } from "@testing-library/react";
import Users from "./Users";
import { fetchApi } from "../../../utils/fetchApi";

// setting up mock fro fetchApi
// Mocks a module with an auto-mocked version when it is being required.
jest.mock("../../../utils/fetchApi");

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
    2. Chances of Data Inconsistency (no guarantee for sample data like Ervin Howell to be available)
    3. Availability of REST API is also a concern (may be down or still in dev)
  */

  // Solution: mocking Rest api
  // Note: the above spec should not be added. you can remove it later. Only the following should be added.
  // positive test spec 
  it('fetches userList properly via rest api call', async() => {
    // 1. prepare the mock data
    const mockUserList = [
      {
        id: 1,
        name: "Steve",
        phone: 34545353,
      },
      {
        id: 2,
        name: "John",
        phone: 359045488,
      },
    ];
    // 2. resolve the req with the above mock data
    // 2.1 setup mock for fetchApi (see the line before describe)
    /// 2.2 resolve the req 
    fetchApi.mockResolvedValue(mockUserList);
    // 3. render the comp
    render(<Users />);
    // 4. assert
    const usernameEl = await screen.findByText("Steve");
    expect(usernameEl).toBeInTheDocument();

    const phoneEl = await screen.findByText(/359045488/i);
    expect(phoneEl).toBeInTheDocument();
  });

  // Negative spec 
  it('renders error properly when rest api failed to respond with userList', async() => {
    // prepare mock error 
    const error = 'Error Occured!';
    fetchApi.mockRejectedValue(error);
    render(<Users />);
    const errorElement = await screen.findByText(
      /Sorry! Unable to fetch users! Try again later./i
    );
    expect(errorElement).toBeInTheDocument();
  });



})
