import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { createButton } from './button.js';

describe('createButton', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should create a button element', () => {
    document.body.appendChild(createButton());

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should have the text "Click Me"', () => {
    document.body.appendChild(createButton());

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Click Me');
  });

  it('should change the text to "Clicked!" when clicked', async () => {
    document.body.appendChild(createButton());

    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(button).toHaveTextContent('Clicked!');
  });
});
