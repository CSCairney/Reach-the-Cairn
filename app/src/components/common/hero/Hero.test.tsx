import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from './Hero';

describe('Hero Component', () => {
  const title = 'Reach the Cairn';
  const description = 'Achieve your peak with our comprehensive guides and support.';
  const image = 'path/to/your/image.jpg';

  test('renders the Hero component with title, description, and image', () => {

    render(<Hero title={title} description={description} image={image} />);

    // Check if the title is rendered
    const titleElement = screen.getByText(title);
    expect(titleElement).toContain(title);

    // Check if the description is rendered
    const descriptionElement = screen.getByText(description);
    expect(descriptionElement).toContain(description);

    // Check if the image is rendered
    const imageElement = screen.getByAltText('Hero');
    expect(imageElement).toBeInTheDocument();
  });

  test('renders the button with correct text', () => {
    render(<Hero title={title} description={description} image={image} />);

    // Check if the button is rendered with the correct text
    const buttonElement = screen.getByText('Learn More');
    expect(buttonElement).toBeInTheDocument();
  });

  test('matches the snapshot', () => {
    const { asFragment } = render(<Hero title={title} description={description} image={image} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
