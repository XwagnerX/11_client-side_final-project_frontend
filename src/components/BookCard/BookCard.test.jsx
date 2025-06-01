import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import BookCard from './BookCard';

describe('BookCard Component', () => {
  const mockBook = {
    id: 1,
    title: 'Test Book',
    author: 'Test Author',
    year: '2024',
    status: 'pending'
  };

  const mockOnEdit = vi.fn();
  const mockOnDelete = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders book information correctly', () => {
    render(<BookCard book={mockBook} onEdit={mockOnEdit} onDelete={mockOnDelete} />);
    
    expect(screen.getByText('Test Book')).toBeInTheDocument();
    expect(screen.getByText('Author: Test Author')).toBeInTheDocument();
    expect(screen.getByText('Year: 2024')).toBeInTheDocument();
    expect(screen.getByText('Status: pending')).toBeInTheDocument();
  });

  test('calls onEdit when edit button is clicked', () => {
    render(<BookCard book={mockBook} onEdit={mockOnEdit} onDelete={mockOnDelete} />);
    
    const editButton = screen.getByText('Edit');
    fireEvent.click(editButton);
    
    expect(mockOnEdit).toHaveBeenCalledWith(mockBook);
  });

  test('calls onDelete when delete button is clicked', () => {
    render(<BookCard book={mockBook} onEdit={mockOnEdit} onDelete={mockOnDelete} />);
    
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);
    
    expect(mockOnDelete).toHaveBeenCalledWith(mockBook.id);
  });
}); 