import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import BookForm from './BookForm';

describe('BookForm Component', () => {
  const mockBook = {
    id: 1,
    title: 'Test Book',
    author: 'Test Author',
    year: 2024,
    status: 'pending'
  };

  const mockOnSubmit = vi.fn();
  const mockOnCancel = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders form with empty fields when no book is provided', () => {
    render(<BookForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);
    
    expect(screen.getByLabelText('Title:')).toHaveValue('');
    expect(screen.getByLabelText('Author:')).toHaveValue('');
    expect(screen.getByLabelText('Year:')).toHaveValue('');
    expect(screen.getByLabelText('Status:')).toHaveValue('pending');
  });

  test('renders form with book data when book is provided', () => {
    render(<BookForm book={mockBook} onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);
    
    expect(screen.getByLabelText('Title:')).toHaveValue('Test Book');
    expect(screen.getByLabelText('Author:')).toHaveValue('Test Author');
    expect(screen.getByLabelText('Year:')).toHaveValue('2024');
    expect(screen.getByLabelText('Status:')).toHaveValue('pending');
  });

  test('calls onSubmit with form data when form is submitted', () => {
    render(<BookForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);
    
    fireEvent.change(screen.getByLabelText('Title:'), { target: { value: 'New Book' } });
    fireEvent.change(screen.getByLabelText('Author:'), { target: { value: 'New Author' } });
    fireEvent.change(screen.getByLabelText('Year:'), { target: { value: '2025' } });
    fireEvent.change(screen.getByLabelText('Status:'), { target: { value: 'read' } });
    
    fireEvent.click(screen.getByText('Add Book'));
    
    expect(mockOnSubmit).toHaveBeenCalledWith({
      title: 'New Book',
      author: 'New Author',
      year: '2025',
      status: 'read'
    });
  });

  test('calls onCancel when cancel button is clicked', () => {
    render(<BookForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);
    
    fireEvent.click(screen.getByText('Cancel'));
    
    expect(mockOnCancel).toHaveBeenCalled();
  });
}); 