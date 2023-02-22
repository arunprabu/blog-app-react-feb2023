// AAA 
// Arrange
import { render, screen } from '@testing-library/react';
import App from './App';

// test spec / test case 
test('renders Welcome to React JS! text', () => {
  // Act
  render(<App />);
  
  const paraElement = screen.getByText(/Welcome to React JS!/i);
  // Assert
  expect(paraElement).toBeInTheDocument();
});
