// Sample data for initial display
const books = [
    { id: 1, title: 'Product 1', author: '15$' },
    { id: 2, title: 'Product 2', author: '174$' },
];

// Function to add a book
function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    // Validation
    if (!title || !author) {
        alert('Please fill in all fields');
        return;
    }

    // Add the book to the list
    const newBook = { id: books.length + 1, title, author };
    books.push(newBook);
    alert("Successfully Added")
    // Update the display
    displayBooks();
}

// Function to display books
function displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <p><strong>Title:</strong> ${book.title}</p>
            <p><strong>Author:</strong> ${book.author}</p>
            <button onclick="removeBook(${book.id})">Remove</button>
        `;
        bookList.appendChild(bookDiv);
    });
}

// Function to remove a book
function removeBook(bookId) {
    const index = books.findIndex(book => book.id === bookId);
    if (index !== -1) {
        books.splice(index, 1);
        displayBooks();
    }
}

// Initial display
displayBooks();
