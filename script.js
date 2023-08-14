// DOM elements
const addForm = document.querySelector('#books');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const bookList = document.querySelector('#book-list');

// Saving & Accessing Data to local storage
const books = JSON.parse(localStorage.getItem('books')) || [];

// Function to remove a book
function removeBook(index) {
  books.splice(index, 1);
  localStorage.setItem('books', JSON.stringify(books));
  displayBooks();
}

// Function to display books
function displayBooks() {
  bookList.innerHTML = '';
  books.forEach((book, index) => {
    const li = document.createElement('li');
    li.textContent = `${book.title} by ${book.author}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      removeBook(index);
    });

    li.appendChild(removeButton);
    bookList.appendChild(li);
  });
}

// Function to add a book
function addBook(title, author) {
  if (title.trim() === '' || author.trim() === '') {
    return;
  }

  const newBook = {
    title,
    author,
  };

  books.push(newBook);
  localStorage.setItem('books', JSON.stringify(books));

  displayBooks();
}

// Event listener Submit Button
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  addBook(title, author);
  titleInput.value = '';
  authorInput.value = '';
});
