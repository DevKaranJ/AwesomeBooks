class BookManager {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || []; // Saving & Accessing Data to local storage
    this.addForm = document.querySelector('#books');
    this.titleInput = document.querySelector('#title');
    this.authorInput = document.querySelector('#author');
    this.bookList = document.querySelector('#book-list');
    this.addForm.addEventListener('submit', this.handleFormSubmit.bind(this)); // form submit event handler
    window.onload = this.displayBooks.bind(this); // window.onload event handler
  }

  // Handle form submission
  

  // Function to add a book
  addBook(title, author) {
    if (title.trim() === '' || author.trim() === '') {
      return;
    }

    const newBook = {
      title,
      author,
    };

    this.books.push(newBook);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  // Function to remove a book
  removeBook(index) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  // Function to display books
  displayBooks() {
    this.bookList.innerHTML = '';
    this.books.forEach((book, index) => {
      const li = document.createElement('li');
      li.textContent = `${book.title} by ${book.author}`;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        this.removeBook(index);
      });

      li.appendChild(removeButton);
      this.bookList.appendChild(li);
    });
  }
}

const bookManagerDisplay = new BookManager();
bookManagerDisplay();