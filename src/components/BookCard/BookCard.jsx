import React from 'react';
import styles from './BookCard.module.css';

const BookCard = ({ book, onEdit, onDelete }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{book.title}</h3>
      <p className={styles.author}>Author: {book.author}</p>
      <p className={styles.year}>Year: {book.year}</p>
      <p className={styles.status}>Status: {book.status}</p>
      <div className={styles.buttons}>
        <button onClick={() => onEdit(book)} className={styles.editButton}>
          Edit
        </button>
        <button onClick={() => onDelete(book.id)} className={styles.deleteButton}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard; 