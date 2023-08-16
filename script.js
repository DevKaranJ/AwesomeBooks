class BookManager {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || []; // Saving & Accessing Data to local storage
    this.addForm = document.querySelector('#books');
    this.titleInput = document.querySelector('#title');
    this.authorInput = document.querySelector('#author');
    this.bookList = document.querySelector('#book-list');
    this.listContent = document.querySelector('#listContent');
    this.addNewContent = document.querySelector('#addNewContent');
    this.contactContent = document.querySelector('#contactContent');

    this.addForm.addEventListener('submit', this.handleFormSubmit.bind(this)); // form submit event handler
    window.onload = this.displayBooks.bind(this); // window.onload event handler

    document.querySelector('.item1 a').addEventListener('click', () => {
      this.showContent(this.listContent);
    });
    document.querySelector('.item2 a').addEventListener('click', () => {
      this.showContent(this.addNewContent);
    });
    document.querySelector('.item3 a').addEventListener('click', () => {
      this.showContent(this.contactContent);
    });
  }

  // Handle form submission
  handleFormSubmit(e) {
    e.preventDefault();
    const title = this.titleInput.value;
    const author = this.authorInput.value;
    this.addBook(title, author);
    this.titleInput.value = '';
    this.authorInput.value = '';
  }

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
      li.textContent = `${book.title} By ${book.author}`;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        this.removeBook(index);
      });

      li.appendChild(removeButton);
      this.bookList.appendChild(li);
    });
  }

  showContent(contentSection) {
    this.listContent.style.display = 'none';
    this.addNewContent.style.display = 'none';
    this.contactContent.style.display = 'none';
    contentSection.style.display = 'block';
  }
}

const bookManagerDisplay = new BookManager();
bookManagerDisplay();