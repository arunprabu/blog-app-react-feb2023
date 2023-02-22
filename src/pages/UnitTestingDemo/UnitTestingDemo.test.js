// Unit Tests
// Test Pattern: AAA (Arrange, Act, Assert)
// Arrange  (Let's arrange the necessary tools)
import { render, screen } from "@testing-library/react";
import UnitTestingDemo from "./UnitTestingDemo";

// group of related test specs = TEST SUITE
describe("UnitTestingDemo", () => {
  // test case / test spec
  test("has Unit Testing Examples! as heading", () => {
    // Act
    render(<UnitTestingDemo />);

    const element = screen.getByText("Unit Testing Examples!");
    // Assert (MUST)
    expect(element).toBeInTheDocument();
  });

  it(`has link with text 'Unit Testing Reference'`, () => {
    // ACT
    render(<UnitTestingDemo />);

    const link = screen.getByText(/Unit Testing Reference/i);
    expect(link).toBeTruthy();
  });
});

