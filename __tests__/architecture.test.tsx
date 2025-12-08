import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockUseExternalData = (data?: any, error?: any) => {
    return jest.fn().mockReturnValue({
      data,
      isLoading: !Boolean(data),
      isError: Boolean(error),
      refetch: jest.fn(),
    });
  };

  beforeEach(() => {
    (useExternalData as jest.Mock).mockClear();
  });

  test('renders loading state when data is not available', async () => {
    useExternalData.mockImplementation(mockUseExternalData());
    render(<DesignArchitectureComponent />);
    expect(await screen.findByText(/Loading.../i)).toBeInTheDocument();
  });

  test('renders error message when there is an error fetching data', async () => {
    const errorMessage = 'Failed to fetch';
    useExternalData.mockImplementation(mockUseExternalData(undefined, errorMessage));
    render(<DesignArchitectureComponent />);
    await waitFor(() =>
      expect(screen.getByText(/Error: Failed to fetch/i)).toBeInTheDocument()
    );
  });

  test('renders content when data is fetched successfully', async () => {
    const mockData = { title: 'Sample Title' };
    useExternalData.mockImplementation(mockUseExternalData(mockData));
    render(<DesignArchitectureComponent />);
    await waitFor(() =>
      expect(screen.getByText(/Sample Title/i)).toBeInTheDocument()
    );
  });

  test('handles user interaction with buttons', async () => {
    const mockData = { title: 'Sample Title' };
    useExternalData.mockImplementation(mockUseExternalData(mockData));
    render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    await waitFor(() =>
      expect(useExternalData).toHaveBeenCalled()
    );
  });

  test('ensures accessibility features are properly implemented', async () => {
    const mockData = { title: 'Sample Title' };
    useExternalData.mockImplementation(mockUseExternalData(mockData));
    render(<DesignArchitectureComponent />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeVisible();
    expect(buttonElement).toHaveAttribute('aria-label');
  });

  test('mocks external dependencies correctly', async () => {
    useExternalData.mockImplementation(mockUseExternalData());
    render(<DesignArchitectureComponent />);
    const refetchFunction = (useExternalData as jest.Mock).mock.calls[0][1].refetch;
    expect(refetchFunction).toBeDefined();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockUseExternalData = (data?: any, error?: any) => {
    return jest.fn().mockReturnValue({
      data,
      isLoading: !Boolean(data),
      isError: Boolean(error),
      refetch: jest.fn(),
    });
  };

  beforeEach(() => {
    (useExternalData as jest.Mock).mockClear();
  });

  test('renders loading state when data is not available', async () => {
    useExternalData.mockImplementation(mockUseExternalData());
    render(<DesignArchitectureComponent />);
    expect(await screen.findByText(/Loading.../i)).toBeInTheDocument();
  });

  test('renders error message when there is an error fetching data', async () => {
    const errorMessage = 'Failed to fetch';
    useExternalData.mockImplementation(mockUseExternalData(undefined, errorMessage));
    render(<DesignArchitectureComponent />);
    await waitFor(() =>
      expect(screen.getByText(/Error: Failed to fetch/i)).toBeInTheDocument()
    );
  });

  test('renders content when data is fetched successfully', async () => {
    const mockData = { title: 'Sample Title' };
    useExternalData.mockImplementation(mockUseExternalData(mockData));
    render(<DesignArchitectureComponent />);
    await waitFor(() =>
      expect(screen.getByText(/Sample Title/i)).toBeInTheDocument()
    );
  });

  test('handles user interaction with buttons', async () => {
    const mockData = { title: 'Sample Title' };
    useExternalData.mockImplementation(mockUseExternalData(mockData));
    render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    await waitFor(() =>
      expect(useExternalData).toHaveBeenCalled()
    );
  });

  test('ensures accessibility features are properly implemented', async () => {
    const mockData = { title: 'Sample Title' };
    useExternalData.mockImplementation(mockUseExternalData(mockData));
    render(<DesignArchitectureComponent />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeVisible();
    expect(buttonElement).toHaveAttribute('aria-label');
  });

  test('mocks external dependencies correctly', async () => {
    useExternalData.mockImplementation(mockUseExternalData());
    render(<DesignArchitectureComponent />);
    const refetchFunction = (useExternalData as jest.Mock).mock.calls[0][1].refetch;
    expect(refetchFunction).toBeDefined();
  });
});