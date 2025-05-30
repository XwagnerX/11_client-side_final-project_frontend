import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import BookList from './BookList';

// Mock fetch
global.fetch = vi.fn();

describe('BookList Component', () => {
  const mockBooks = [
    {
      id: 1,
      title: 'Test Book 1',
      author: 'Test Author 1',
      year: '2024',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Test Book 2',
      author: 'Test Author 2',
      year: '2023',
      status: 'read'
    }
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    fetch.mockResolvedValue({
      json: () => Promise.resolve(mockBooks)
    });
  });

  test('renders book list title', async () => {
    await act(async () => {
      render(<BookList />);
    });
    expect(screen.getByText('My Book Collection')).toBeInTheDocument();
  });

  test('renders add book button', async () => {
    await act(async () => {
      render(<BookList />);
    });
    expect(screen.getByText('Add New Book')).toBeInTheDocument();
  });

  test('fetches and displays books', async () => {
    await act(async () => {
      render(<BookList />);
    });
    
    await waitFor(() => {
      expect(screen.getByText('Test Book 1')).toBeInTheDocument();
      expect(screen.getByText('Test Book 2')).toBeInTheDocument();
    });
  });

  test('shows form when add book button is clicked', async () => {
    await act(async () => {
      render(<BookList />);
    });
    
    await act(async () => {
      fireEvent.click(screen.getByText('Add New Book'));
    });
    
    expect(screen.getByLabelText('Title:')).toBeInTheDocument();
    expect(screen.getByLabelText('Author:')).toBeInTheDocument();
    expect(screen.getByLabelText('Year:')).toBeInTheDocument();
    expect(screen.getByLabelText('Status:')).toBeInTheDocument();
  });

  test('handles book deletion', async () => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve(mockBooks)
    })).mockImplementationOnce(() => Promise.resolve({
      ok: true
    }));

    await act(async () => {
      render(<BookList />);
    });
    
    await waitFor(() => {
      expect(screen.getByText('Test Book 1')).toBeInTheDocument();
    });

    await act(async () => {
      const deleteButtons = screen.getAllByText('Delete');
      fireEvent.click(deleteButtons[0]);
    });

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(expect.stringContaining('/Book/1'), {
        method: 'DELETE'
      });
    });
  });
}); 