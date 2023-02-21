// Unit Tests
// Test Pattern: AAA (Arrange, Act, Assert)
// Arrange  (Let's arrange the necessary tools)
import { render, screen } from '@testing-library/react';
import UnitTestingDemo from './UnitTestingDemo';

// test case / test spec 
test("has Unit Testing Examples as heading", () => {
  // Act
  render(<UnitTestingDemo />);
  const heading = screen.getByText('Unit Testing Examples');

  // Assert (Must)
  expect(heading).toBeInTheDocument();
});


// Why npm run test command? 
