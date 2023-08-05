import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders home component correctly', () => {
  // Arrange (Render the component)
  const { getByText } = render(<Home />);

  // Act (Get the elements to check for their existence)
  const headingElement = getByText(/Discover and share/i);
  const promptopiaElement = getByText(/AI powered prompts/i);
  const descriptionElement = getByText(
    /Promptopia is a community of writers and artists/i
  );

  // Assert (Check if the expected elements are present)
  expect(headingElement).toBeInTheDocument();
  expect(promptopiaElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});
