import { render, screen } from "@testing-library/react";
import { mockFetch } from "./mocks/mockFetch";
import Posts from "./Posts";

describe('Posts', () => {
  // setting up a spy   (beforeEach and beforeAll)
  beforeEach(() => {
    // preparing to attach a spy
    jest.spyOn(window, "fetch").mockImplementation(mockFetch);
  });

  // tear down (afterEach and afterAll)
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders posts properly", async () => {
    render(<Posts />);
    const titleElement = await screen.findByText(
      /cricket match #1 result - lose/i
    );
    expect(titleElement).toBeInTheDocument();
  });

})