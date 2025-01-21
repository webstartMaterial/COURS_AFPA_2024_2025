CREATE DATABASE librarymvc;

USE librarymvc;

CREATE TABLE book (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    year_created_at year_created_at,
    available BOOLEAN DEFAULT TRUE
);

CREATE TABLE loan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    book_id INT,
    date_loan DATE,
    date_return DATE,
    FOREIGN KEY(book_id) REFERENCES book(id)
);

INSERT INTO book (id, title, author, year_created_at, available)
VALUES (1, '1984', 'George Orwell', 1949, TRUE);

INSERT INTO book (id, title, author, year_created_at, available)
VALUES (2, 'To Kill a Mockingbird', 'Harper Lee', 1960, TRUE);

INSERT INTO book (id, title, author, year_created_at, available)
VALUES (3, 'The Great Gatsby', 'F. Scott Fitzgerald', 1925, TRUE);

INSERT INTO book (id, title, author, year_created_at, available)
VALUES (4, 'Pride and Prejudice', 'Jane Austen', 1913, TRUE);

INSERT INTO book (id, title, author, year_created_at, available)
VALUES (5, 'The Catcher in the Rye', 'J.D. Salinger', 1951, TRUE);

INSERT INTO book (id, title, author, year_created_at, available)
VALUES (6, 'The Hobbit', 'J.R.R. Tolkien', 1937, TRUE);

INSERT INTO book (id, title, author, year_created_at, available)
VALUES (7, 'Fahrenheit 451', 'Ray Bradbury', 1953, TRUE);

INSERT INTO book (id, title, author, year_created_at, available)
VALUES (8, 'Moby-Dick', 'Herman Melville', 1951, TRUE);

INSERT INTO book (id, title, author, year_created_at, available)
VALUES (9, 'War and Peace', 'Leo Tolstoy', 1969, TRUE);

INSERT INTO book (id, title, author, year_created_at, available)
VALUES (10, 'Brave New World', 'Aldous Huxley', 1932, TRUE);