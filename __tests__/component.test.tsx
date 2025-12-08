import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with loading state initially', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ data: null, isLoading: true });
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays content when data is fetched successfully', async () => {
    const mockData = { title: 'Sample Title' };
    (useExternalData as jest.Mock).mockReturnValueOnce({ data: mockData, isLoading: false });
    
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText(/sample title/i)).toBeInTheDocument();
  });

  test('handles error state when fetching data fails', async () => {
    const errorMessage = 'Failed to fetch data';
    (useExternalData as jest.Mock).mockReturnValueOnce({ data: null, isLoading: false, error: errorMessage });
    
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText(/failed to fetch data/i)).toBeInTheDocument();
  });

  test('allows user interaction with content', () => {
    const mockData = { title: 'Sample Title' };
    (useExternalData as jest.Mock).mockReturnValueOnce({ data: mockData, isLoading: false });
    
    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByText(/sample title/i));
  });

  test('ensures accessibility features are properly implemented', () => {
    const mockData = { title: 'Sample Title' };
    (useExternalData as jest.Mock).mockReturnValueOnce({ data: mockData, isLoading: false });
    
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText(/sample title/i)).toHaveAttribute('role', 'button');
    expect(screen.getByText(/sample title/i)).toHaveAttribute('aria-label', 'Sample Title Button');
  });

  test('mocks external dependencies correctly', () => {
    const mockData = { title: 'Sample Title' };
    (useExternalData as jest.Mock).mockReturnValueOnce({ data: mockData, isLoading: false });
    
    render(<CoreFunctionalityComponent />);
    
    expect(useExternalData).toHaveBeenCalled();
  });

  test('handles edge cases such as empty content', () => {
    const mockData = { title: '' };
    (useExternalData as jest.Mock).mockReturnValueOnce({ data: mockData, isLoading: false });
    
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText(/no content available/i)).toBeInTheDocument();
  });

  test('handles edge cases such as null or undefined data', () => {
    const mockData = null;
    (useExternalData as jest.Mock).mockReturnValueOnce({ data: mockData, isLoading: false });
    
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText(/no content available/i)).toBeInTheDocument();
  });

  test('handles edge cases such as unexpected data structure', () => {
    const mockData = { wrongKey: 'Sample Title' };
    (useExternalData as jest.Mock).mockReturnValueOnce({ data: mockData, isLoading: false });
    
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText(/unexpected data structure/i)).toBeInTheDocument();
  });

});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with loading state initially', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ data: null, isLoading: true });
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays content when data is fetched successfully', async () => {
    const mockData = { title: 'Sample Title' };
    (useExternalData as jest.Mock).mockReturnValueOnce({ data: mockData, isLoading: false });
    
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText(/sample title/i)).toBeInTheDocument();
  });

  test('handles error state when fetching data fails', async () => {
    const errorMessage = 'Failed to fetch data';
    (useExternalData as jest.Mock).mockReturnValueOnce({ data: null, isLoading: false, error: errorMessage });
    
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText(/failed to fetch data/i)).toBeInTheDocument();
  });

  test('allows user interaction with content', () => {
    const mockData = { title: 'Sample Title' };
    (useExternalData as jest.Mock).mockReturnValueOnce({ data: mockData, isLoading: false });
    
    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByText(/sample title/i));
  });

  test('ensures accessibility features are properly implemented', () => {
    const mockData = { title: 'Sample Title' };
    (useExternalData as jest.Mock).mockReturnValueOnce({ data: mockData, isLoading: false });
    
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText(/sample title/i)).toHaveAttribute('role', 'button');
    expect(screen.getByText(/sample title/i)).toHaveAttribute('aria-label', 'Sample Title Button');
  });

  test('mocks external dependencies correctly', () => {
    const mockData = { title: 'Sample Title' };
    (useExternalData as jest.Mock).mockReturnValueOnce({ data: mockData, isLoading: false });
    
    render(<CoreFunctionalityComponent />);
    
    expect(useExternalData).toHaveBeenCalled();
  });

  test('handles edge cases such as empty content', () => {
    const mockData = { title: '' };
    (useExternalData as jest.Mock).mockReturnValueOnce({ data: mockData, isLoading: false });
    
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText(/no content available/i)).toBeInTheDocument();
  });

  test('handles edge cases such as null or undefined data', () => {
    const mockData = null;
    (useExternalData as jest.Mock).mockReturnValueOnce({ data: mockData, isLoading: false });
    
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText(/no content available/i)).toBeInTheDocument();
  });

  test('handles edge cases such as unexpected data structure', () => {
    const mockData = { wrongKey: 'Sample Title' };
    (useExternalData as jest.Mock).mockReturnValueOnce({ data: mockData, isLoading: false });
    
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText(/unexpected data structure/i)).toBeInTheDocument();
  });

});