// Book Class Represents a Book
class Book {
    constructor(_title, _author, _isbn) {
        this.title = _title;
        this._author = _author;
        this.isbn = _isbn;
    }
}
// UI Class Handle UI Tasks
class UI {
    static displayBooks() {
        const StoredBooks = [{
                'title': 'Book One',
                'author': 'John Doe',
                'isbn': '24234234'
            },
            {
                'title': 'Book Two',
                'author': 'Jane Doe',
                'isbn': '4356745'
            }
        ];
        const books = StoredBooks;

        books.forEach(book => UI.addBookToList(book));
    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
    }
}
// Store Class: Handles storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event: Add a Book

// Event: Remove a Book