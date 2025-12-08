import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      title: 'Test Title',
      content: 'This is a test content.',
    },
  }),
}));

describe('Core Functionality Component Tests', () => {
  it('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/test title/i)).toBeInTheDocument();
  });

  it('displays loading state while fetching data', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce(Promise.resolve({})); // simulate network delay
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByRole('status'));
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('displays error message when data fetching fails', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Network Error'));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByRole('alert'));
    expect(screen.getByText(/network error/i)).toBeInTheDocument();
  });

  it('allows user to submit form data', async () => {
    const handleSubmit = jest.fn();
    render(
      <CoreFunctionalityComponent
        onSubmit={handleSubmit}
      />
    );
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(handleSubmit).toHaveBeenCalledWith({ name: 'John Doe' }, expect.any(Object));
  });

  it('validates form inputs and shows error messages', () => {
    render(<CoreFunctionalityComponent />);
    fireEvent.submit(screen.getByRole('form'));
    expect(screen.getByText(/please fill out this field/i)).toBeInTheDocument();
  });

  it('is keyboard navigable and accessible', async () => {
    render(<CoreFunctionalityComponent />);
    const input = screen.getByLabelText(/name/i);
    fireEvent.keyDown(input, { key: 'Tab', code: 'Tab' });
    expect(document.activeElement).toBe(input); // check if the element is focused
  });

  it('renders ARIA labels and roles correctly', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'submit content');
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      title: 'Test Title',
      content: 'This is a test content.',
    },
  }),
}));

describe('Core Functionality Component Tests', () => {
  it('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/test title/i)).toBeInTheDocument();
  });

  it('displays loading state while fetching data', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce(Promise.resolve({})); // simulate network delay
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByRole('status'));
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('displays error message when data fetching fails', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Network Error'));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByRole('alert'));
    expect(screen.getByText(/network error/i)).toBeInTheDocument();
  });

  it('allows user to submit form data', async () => {
    const handleSubmit = jest.fn();
    render(
      <CoreFunctionalityComponent
        onSubmit={handleSubmit}
      />
    );
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(handleSubmit).toHaveBeenCalledWith({ name: 'John Doe' }, expect.any(Object));
  });

  it('validates form inputs and shows error messages', () => {
    render(<CoreFunctionalityComponent />);
    fireEvent.submit(screen.getByRole('form'));
    expect(screen.getByText(/please fill out this field/i)).toBeInTheDocument();
  });

  it('is keyboard navigable and accessible', async () => {
    render(<CoreFunctionalityComponent />);
    const input = screen.getByLabelText(/name/i);
    fireEvent.keyDown(input, { key: 'Tab', code: 'Tab' });
    expect(document.activeElement).toBe(input); // check if the element is focused
  });

  it('renders ARIA labels and roles correctly', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'submit content');
  });
});